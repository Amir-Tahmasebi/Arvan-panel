import { Button } from "@/components";
import { APP_ROUTES } from "@/config";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button className="max-w-44">
        <Link href={APP_ROUTES.ADMIN.ARTICLES.INDEX}>Admin Panel</Link>
      </Button>
    </div>
  );
}
