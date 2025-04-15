import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export function NewsCard({
  id,
  title,
  date,
  excerpt,
  imageUrl,
}: NewsCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          <CardDescription>{date}</CardDescription>
        </div>
        <CardTitle className="text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/news/${id}`} className="w-full">
          <Button
            variant="ghost"
            className="w-full text-primary hover:text-primary/90 hover:bg-accent"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
