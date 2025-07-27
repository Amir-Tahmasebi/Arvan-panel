'use client'
import { useState } from "react";

import { Checkbox, Input, Label } from "@/components";
import { useTagsStore } from "@/store";
import { addNewTag } from "@/lib";

const Tags = () => {
  const { tags, setTags } = useTagsStore();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddNewTag = async () => {
    try {
      const response = await addNewTag(inputValue);
      if (response.success) {
        setTags([...tags, inputValue]);
        setInputValue("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim().length >= 3) {
      handleAddNewTag();
    }
  };

  const renderTags = tags.sort().map((tag, index) => (
    <div className="mt-6" key={index}>
      <Checkbox
        label={tag}
        onChange={(checked) => console.log("Tag is", checked)}
      />
    </div>
  ));

  const renderTagsSection = (
    <div>
      <Label htmlFor="tags">Tags</Label>
      <Input
        id="tags"
        value={inputValue}
        placeholder="New tag"
        className="mt-2"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <>{renderTags}</>
    </div>
  );
  return renderTagsSection;
};

export default Tags;
