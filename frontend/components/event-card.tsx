import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  imageUrl,
}: EventCardProps) {
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
        <CardTitle className="text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary/10"
        >
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}
