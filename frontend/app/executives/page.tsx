import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

interface ExecutiveProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  email: string;
  phone: string;
}

function ExecutiveCard({
  name,
  position,
  bio,
  imageUrl,
  email,
  phone,
}: ExecutiveProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-secondary">{name}</CardTitle>
        <CardDescription className="font-medium text-primary">
          {position}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">{phone}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function ExecutivesPage() {
  const executives = [
    {
      name: "Josiah Yerima",
      position: "President",
      bio: "John is a final year Theology student with a passion for youth ministry and leadership development.",
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489530777_676419168409600_4874143111041904016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq6OC3llIgFErlWKDOf4nsuyUwBmqOcq27JTAGao5yrWyq-sO6D08HvzNwrKHuT2Q1fOFMG61YIxT-jCIulbQq&_nc_ohc=yfxogkfS4M4Q7kNvwF2LbAv&_nc_oc=AdnegLMrpHvTLLUrESP1qrDwfOdJxNN8-XJntLP61ntz6cVENB6cOSCWwn8ORWuInbQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=V2xqQvCgeZhpWEhlcwrjbA&oh=00_AfF-HOnmSVs117KNJ6kmwtXlO2xt0dlucBY4RKfp8Gu7CA&oe=68046EDD",
      email: "john.adewale@example.com",
      phone: "+234 801 234 5678",
    },
    {
      name: "Sarah Okafor",
      position: "Vice President I",
      bio: "Sarah is studying Computer Science and has been active in BSF since her first year.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      email: "sarah.okafor@example.com",
      phone: "+234 802 345 6789",
    },
    {
      name: "Joseph John",
      position: "Vice President II",
      bio: "Sarah is studying Computer Science and has been active in BSF since her first year.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      email: "sarah.okafor@example.com",
      phone: "+234 802 345 6789",
    },
    {
      name: "Emmanuel Bello",
      position: "General Secretary",
      bio: "Emmanuel is a diligent Law student known for his organizational skills and attention to detail.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      email: "emmanuel.bello@example.com",
      phone: "+234 803 456 7890",
    },
    {
      name: "Grace Musa",
      position: "Financial Secretary",
      bio: "Grace is an Accounting student who manages the fellowship's finances with integrity and transparency.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      email: "grace.musa@example.com",
      phone: "+234 804 567 8901",
    },
    {
      name: "David Eze",
      position: "Prayer Secretary",
      bio: "David is a passionate intercessor studying Medicine who coordinates the fellowship's prayer activities.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      email: "david.eze@example.com",
      phone: "+234 805 678 9012",
    },
    {
      name: "Ruth Adamu",
      position: "Welfare Secretary",
      bio: "Ruth is a Sociology student with a heart for service and ensuring the well-being of all members.",
      imageUrl: "/placeholder.svg?height=400&width=400",
      email: "ruth.adamu@example.com",
      phone: "+234 806 789 0123",
    },
  ];

  return (
    <>
      <PageHeader
        title="Executive Committee"
        description="Meet the dedicated team leading the Baptist Student Fellowship"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((executive, index) => (
              <ExecutiveCard key={index} {...executive} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-6">
              Roles and Responsibilities
            </h2>
            <div className="prose max-w-none text-muted-foreground text-left">
              <p className="mb-4">
                The Executive Committee is responsible for the overall
                leadership and management of the Baptist Student Fellowship.
                They work together to plan and implement activities, manage
                resources, and ensure that the fellowship fulfills its mission
                and vision.
              </p>
              <p>
                Each executive member has specific responsibilities related to
                their position, but they all share a commitment to serving the
                fellowship with integrity, dedication, and a Christ-like spirit.
                The committee meets regularly to pray, plan, and address any
                issues or opportunities that arise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
