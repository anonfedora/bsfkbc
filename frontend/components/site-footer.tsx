import Link from "next/link";
import Image from "next/image";
import { Facebook, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:py-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src="/bsf-logo.png"
            alt="BSF Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Baptist Student Fellowship, Kaduna
            Baptist Conference. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/bsfkaduna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </a>
            <a href="mailto:info@bsfkaduna.org" aria-label="Send us an email">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
