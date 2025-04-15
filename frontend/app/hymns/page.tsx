import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Music, BookOpen } from "lucide-react";

interface HymnProps {
  title: string;
  number: string;
  firstLine: string;
}

function HymnCard({ title, number, firstLine }: HymnProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-secondary">{title}</CardTitle>
          <span className="text-sm font-medium text-primary">#{number}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">{firstLine}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary/10"
        >
          View Lyrics
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function HymnsPage() {
  const hymns = [
    {
      title: "Amazing Grace",
      number: "1",
      firstLine: "Amazing grace! How sweet the sound",
    },
    {
      title: "Great Is Thy Faithfulness",
      number: "2",
      firstLine: "Great is Thy faithfulness, O God my Father",
    },
    {
      title: "How Great Thou Art",
      number: "3",
      firstLine: "O Lord my God, when I in awesome wonder",
    },
    {
      title: "Holy, Holy, Holy",
      number: "4",
      firstLine: "Holy, holy, holy! Lord God Almighty!",
    },
    {
      title: "It Is Well With My Soul",
      number: "5",
      firstLine: "When peace like a river attendeth my way",
    },
    {
      title: "What a Friend We Have in Jesus",
      number: "6",
      firstLine:
        "What a friend we have in Jesus, all our sins and griefs to bear",
    },
    {
      title: "Blessed Assurance",
      number: "7",
      firstLine: "Blessed assurance, Jesus is mine!",
    },
    {
      title: "To God Be the Glory",
      number: "8",
      firstLine: "To God be the glory, great things He hath done",
    },
    {
      title: "I Surrender All",
      number: "9",
      firstLine: "All to Jesus I surrender, all to Him I freely give",
    },
  ];

  return (
    <>
      <PageHeader
        title="Hymns Collection"
        description="Browse and search our collection of hymns"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hymns by title, number or lyrics..."
                className="pl-8"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hymns.map((hymn, index) => (
              <HymnCard key={index} {...hymn} />
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

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Music className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-secondary">
                    Hymn of the Week
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold mb-2">Amazing Grace</h3>
                <p className="text-muted-foreground mb-4 italic">
                  "Amazing grace! How sweet the sound
                  <br />
                  That saved a wretch like me!
                  <br />I once was lost, but now am found;
                  <br />
                  Was blind, but now I see."
                </p>
                <p className="text-sm text-muted-foreground">
                  Written by John Newton in 1772, this beloved hymn speaks of
                  God's amazing grace that saves and transforms lives.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  View Full Lyrics
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-secondary">
                    About Our Hymnal
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Baptist Student Fellowship uses the Baptist Hymnal, which
                  contains a rich collection of traditional and contemporary
                  hymns that have been cherished by generations of believers.
                </p>
                <p className="text-muted-foreground">
                  Our online hymn database is continually being updated to
                  include lyrics, sheet music, and historical information about
                  each hymn.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
