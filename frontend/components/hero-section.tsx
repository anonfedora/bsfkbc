import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-secondary">
                Baptist Student Fellowship
              </h1>
              <h2 className="text-xl font-semibold text-primary">
                Kaduna Baptist Conference
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Uniting Baptist students in faith, fellowship, and service. Join
                our community of believers dedicated to spiritual growth and
                Christian values.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1 bg-primary hover:bg-primary/90"
              >
                Join Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-1 border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last">
            <div className="absolute inset-0 flex items-center justify-center bg-accent/50 rounded-xl">
              <Image
                src="/bsf-logo.png"
                width={300}
                height={300}
                alt="BSF Logo"
                className="w-64 h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
