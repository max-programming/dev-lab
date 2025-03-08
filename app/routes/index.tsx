import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="container mx-auto max-w-7xl my-3 space-y-2">
      <h1 className="text-4xl font-bold">Welcome to DevLab</h1>
      <h3 className="text-xl font-semibold">All tools</h3>
      <div className="grid grid-cols-3 gap-4">
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
    </div>
  );
}

function ToolCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Base64 Image Encoder / Decoder</CardTitle>
        <CardDescription>Encode and decode Base64 image data</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
