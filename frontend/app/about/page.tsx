import { PageHeader } from "@/components/page-header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about the Baptist Student Fellowship of Kaduna Baptist Conference"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-4">
                Our Motto
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                "Growing together in faith, fellowship, and service."
              </p>

              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-4">
                Vision
              </h2>
              <p className="text-muted-foreground mb-6">
                To be a vibrant community of Baptist students united in faith,
                growing spiritually, and making a positive impact on campus and
                beyond.
              </p>

              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-4">
                Mission
              </h2>
              <p className="text-muted-foreground mb-6">
                The Baptist Student Fellowship exists to provide a supportive
                Christian community for students, promote spiritual growth
                through Bible study and prayer, develop leadership skills, and
                engage in service and outreach activities that demonstrate
                Christ's love.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="BSF Students"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-6 text-center">
              Our History
            </h2>
            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-4">
                The Baptist Student Fellowship of Kaduna Baptist Conference was
                established in 1958 as a platform for Baptist students in
                tertiary institutions to fellowship together, grow spiritually,
                and support one another in their academic pursuits.
              </p>
              <p className="mb-4">
                What began as small prayer meetings in dormitories has grown
                into a vibrant organization with chapters across multiple
                institutions in Kaduna State. Over the decades, BSF has been
                instrumental in nurturing young Baptist leaders who have gone on
                to serve in various capacities in churches, denominations, and
                society.
              </p>
              <p className="mb-4">
                The fellowship has consistently maintained its focus on Bible
                study, discipleship, leadership development, and community
                service. Annual conferences, retreats, and outreach programs
                have become hallmarks of the BSF experience, creating lasting
                memories and spiritual milestones for generations of students.
              </p>
              <p>
                Today, BSF continues to adapt to the changing needs of students
                while remaining firmly rooted in Baptist principles and
                traditions. As we look to the future, we remain committed to our
                founding vision of creating a supportive community where
                students can grow in their faith and prepare for a lifetime of
                Christian service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
