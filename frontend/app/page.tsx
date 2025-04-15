import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  Users,
  BookOpen,
  ImageIcon,
  FileText,
  ChevronRight,
  Video,
} from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { EventCard } from "@/components/event-card";
import { NewsCard } from "@/components/news-card";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Latest News Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                Latest News
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Stay updated with the latest announcements and news from BSF
                Kaduna Baptist Conference.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl pt-8">
            <NewsCard
              id="1"
              title="BAPTIST STUDENT'S FELLOWSHIP ANNUAL RETREAT"
              date="17th-20th April, 2025"
              excerpt="Registration for the annual BSF conference is now open. Early bird registration ends July 15th."
              imageUrl="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/486138250_664417159609801_3061242768304579367_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG35LBr3WJFyXWnxLtYtOO1XF7iGEkef15cXuIYSR5_Xv3dWpR5-uvREoQ0pEN5SvCqLpBpGrdl0gosWtC0VKr_&_nc_ohc=01GqnrIAgfUQ7kNvwHzjx-K&_nc_oc=AdnHGt0DzAH-Dagk2YND2fFFVJ5uPHuAzPXHszTFk_42sUlUHH3nGlOsOFmu_4ihOzI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=PXlhEB2BDXK-QnxrG9H1Ig&oh=00_AfHR7hj5r3YownzQlzcB32N73IbUs-ynF3bK6ua1WGTiOA&oe=6804508C"
            />
            <NewsCard
              id="2"
              title="New Executive Committee Elected"
              date="May 28, 2023"
              excerpt="Congratulations to the newly elected executive committee members who will serve for the next academic year."
              imageUrl="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489158772_674201518631365_7568726674996577532_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEC9iP5zYra0qY-uH8ynPDRBMxJlI9szqIEzEmUj2zOolpm4oHAOCIRxesoSBQOxFdS-2W5vxC8qeGpO8uS5FLd&_nc_ohc=r_0jVArQpksQ7kNvwE6L_0p&_nc_oc=AdmJqfNizy62z7NX1SmUJ4gojHNVFvksru9U-7wyzWzS9nOZG88zBlmFayoL85bQc5Y&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=cED7LGzB3Pt1dCBeDxfwrQ&oh=00_AfHsm6KA4tELc711Yf__eeCSLRMg3SR2zv1Hd_xYMw3uDQ&oe=68044FB5"
            />
            <NewsCard
              id="3"
              title="BSF Choir Wins Regional Competition"
              date="April 10, 2023"
              excerpt="Our choir has won first place in the regional gospel choir competition. Congratulations to all members!"
              imageUrl="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483062692_654586830592834_7481385174951399359_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHkYeo-V3ArejFtQcLD0uBmqSNEWqWOWkqpI0RapY5aSqNzP86NLOpLOrKc7t8nDJnCBdhy2C0BSBhjlWQZ8npa&_nc_ohc=ChS5awTv2G0Q7kNvwG-JS7Y&_nc_oc=AdnELP8NL1E_NNaUMA4SBoEd-PS69RPQW6CvNulT8e57cZveqZUaOPz0mtMtwV3BKk0&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=2zcFJGv7S6ZeUIetNRGtog&oh=00_AfF7_fz2SP2-GmD4KTcFz9lpz0hIqoPzCNYpUUm_WezIQA&oe=68044273"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/news">
              <Button
                variant="outline"
                className="gap-1 border-primary text-primary hover:bg-primary/10"
              >
                View All News <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                Upcoming Events
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Join us for these upcoming events and activities organized by
                BSF Kaduna Baptist Conference.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl pt-8">
            <EventCard
              title="Bible Study: Book of Romans"
              date="July 10, 2023"
              time="6:00 PM - 8:00 PM"
              location="Main Chapel"
              imageUrl="/placeholder.svg?height=200&width=400"
            />
            <EventCard
              title="Community Outreach Program"
              date="July 15, 2023"
              time="9:00 AM - 2:00 PM"
              location="Kaduna Central"
              imageUrl="/placeholder.svg?height=200&width=400"
            />
            <EventCard
              title="Worship Night"
              date="July 22, 2023"
              time="7:00 PM - 9:30 PM"
              location="Main Chapel"
              imageUrl="/placeholder.svg?height=200&width=400"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button
                variant="outline"
                className="gap-1 border-primary text-primary hover:bg-primary/10"
              >
                View All Events <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
                Quick Links
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Access important sections of our website quickly.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl pt-8">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="text-secondary">
                    Executive Committee
                  </CardTitle>
                  <CardDescription>Meet our leadership team</CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Link href="/executives" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-1 text-primary hover:text-primary/90 hover:bg-accent"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <CalendarDays className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="text-secondary">
                    Events Calendar
                  </CardTitle>
                  <CardDescription>
                    View and register for events
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-1 text-primary hover:text-primary/90 hover:bg-accent"
                  >
                    View Calendar <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <ImageIcon className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="text-secondary">
                    Photo Gallery
                  </CardTitle>
                  <CardDescription>Browse our event photos</CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Link href="/gallery" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-1 text-primary hover:text-primary/90 hover:bg-accent"
                  >
                    View Gallery <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="text-secondary">
                    Hymns Collection
                  </CardTitle>
                  <CardDescription>Search and view hymn lyrics</CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Link href="/hymns" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-1 text-primary hover:text-primary/90 hover:bg-accent"
                  >
                    Browse Hymns <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="text-secondary">
                    Student Biodata
                  </CardTitle>
                  <CardDescription>Manage your profile</CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Link href="/biodata" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-1 text-primary hover:text-primary/90 hover:bg-accent"
                  >
                    Access Biodata <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Video className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle className="text-secondary">Videos</CardTitle>
                  <CardDescription>Watch sermons and events</CardDescription>
                </div>
              </CardHeader>
              <CardFooter>
                <Link href="/videos" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-1 text-primary hover:text-primary/90 hover:bg-accent"
                  >
                    Watch Videos <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
