import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Play, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  duration: string;
  date: string;
  thumbnailUrl: string;
  description: string;
}

function VideoCard({
  id,
  title,
  duration,
  date,
  thumbnailUrl,
  description,
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative">
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {duration}
        </div>
        <Link href={`/videos/${id}`} className="block relative group">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-primary/90 rounded-full p-3">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
        </Link>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardDescription>{date}</CardDescription>
        </div>
        <CardTitle className="text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/videos/${id}`} className="w-full">
          <Button
            variant="ghost"
            className="w-full text-primary hover:text-primary/90 hover:bg-accent"
          >
            Watch Video
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function VideosPage() {
  const videos = [
    {
      id: "1",
      title: "BSFKBC ANNUAL RETREAT",
      duration: "00:30",
      date: "April 05, 2025",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Watch the highlights from our 2022 Annual Conference featuring worship, keynote speakers, and fellowship activities.",
    },
    {
      id: "2",
      title: "Easter Celebration Service",
      duration: "48:32",
      date: "April 9, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Full recording of our special Easter service celebrating the resurrection of Christ.",
    },
    {
      id: "3",
      title: "BSF Choir Performance",
      duration: "12:45",
      date: "April 15, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Watch our award-winning choir perform 'Total Praise' and 'How Great Thou Art' at the Regional Gospel Choir Competition.",
    },
    {
      id: "4",
      title: "Bible Study: Introduction to Romans",
      duration: "52:18",
      date: "February 22, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "First session of our Bible study series on the Book of Romans led by Pastor James Thompson.",
    },
    {
      id: "5",
      title: "Community Outreach Documentary",
      duration: "18:37",
      date: "March 20, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Documentary of our recent outreach program at Hope Orphanage, showcasing the impact of our service.",
    },
    {
      id: "6",
      title: "Leadership Workshop: Servant Leadership",
      duration: "45:12",
      date: "January 15, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Workshop on servant leadership principles for Christian leaders, presented by Dr. Samuel Johnson.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Videos"
        description="Watch sermons, worship sessions, events, and more"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="max-w-md w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search videos..."
                  className="pl-8"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option value="all">All Categories</option>
                <option value="sermons">Sermons</option>
                <option value="worship">Worship</option>
                <option value="events">Events</option>
                <option value="bible-study">Bible Study</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                duration={video.duration}
                date={video.date}
                thumbnailUrl={video.thumbnailUrl}
                description={video.description}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
