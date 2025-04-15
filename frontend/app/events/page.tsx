import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
}

function EventCard({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  category,
}: EventProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative">
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
          {category}
        </div>
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
        <div className="space-y-2 mb-4">
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
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90">
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function EventsPage() {
  const events = [
    {
      title: "Bible Study: Book of Romans",
      date: "July 10, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Main Chapel",
      description:
        "Join us for an in-depth study of the Book of Romans, exploring its theological significance and practical applications for our daily lives.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Bible Study",
    },
    {
      title: "Community Outreach Program",
      date: "July 15, 2023",
      time: "9:00 AM - 2:00 PM",
      location: "Kaduna Central",
      description:
        "Participate in our community service initiative where we'll be distributing food, clothing, and sharing the gospel with those in need.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Outreach",
    },
    {
      title: "Worship Night",
      date: "July 22, 2023",
      time: "7:00 PM - 9:30 PM",
      location: "Main Chapel",
      description:
        "An evening of praise, worship, and spiritual renewal. Come with an expectant heart as we seek God's presence together.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Worship",
    },
    {
      title: "Leadership Workshop",
      date: "July 29, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "Conference Room",
      description:
        "Develop your leadership skills through interactive sessions, case studies, and mentoring from experienced leaders in the Baptist community.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Workshop",
    },
    {
      title: "Prayer Retreat",
      date: "August 5-6, 2023",
      time: "All Day",
      location: "Baptist Retreat Center",
      description:
        "A two-day retreat focused on prayer, meditation, and spiritual renewal. Accommodation and meals will be provided.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Retreat",
    },
    {
      title: "Freshers' Welcome Party",
      date: "August 12, 2023",
      time: "4:00 PM - 8:00 PM",
      location: "Fellowship Hall",
      description:
        "A special event to welcome new students to the Baptist Student Fellowship. Games, food, fellowship, and an introduction to BSF activities.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Social",
    },
  ];

  return (
    <>
      <PageHeader
        title="Events"
        description="Join us for upcoming events and activities organized by BSF Kaduna Baptist Conference"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary">
              Upcoming Events
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option value="all">All Categories</option>
                <option value="bible-study">Bible Study</option>
                <option value="outreach">Outreach</option>
                <option value="worship">Worship</option>
                <option value="workshop">Workshop</option>
                <option value="retreat">Retreat</option>
                <option value="social">Social</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6">
              Event Calendar
            </h2>
            <div className="bg-white p-6 rounded-lg border">
              <p className="text-center text-muted-foreground">
                Interactive calendar view coming soon. Check back for updates!
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6">
              Past Events
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-secondary">
                    Easter Celebration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      April 9, 2023
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    A special service celebrating the resurrection of Christ,
                    followed by fellowship and refreshments.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/gallery" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      View Photos
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-secondary">
                    Annual Conference 2022
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      December 5-8, 2022
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Our annual conference with the theme "Transformed for
                    Mission" featuring guest speakers, workshops, and fellowship
                    activities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/gallery" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      View Photos
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
