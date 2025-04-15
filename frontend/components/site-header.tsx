"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/bsf-logo.png"
              alt="BSF Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="inline-block font-bold text-secondary">
              BSFKBC
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/executives"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Executive Committee
            </Link>
            <Link
              href="/events"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Events
            </Link>
            <Link
              href="/news"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              News
            </Link>
            <Link
              href="/gallery"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              href="/videos"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Videos
            </Link>
            <Link
              href="/biodata"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Student Biodata
            </Link>
            <Link
              href="/hymns"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Hymns
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex">
              Register
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="block md:hidden">
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-16 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="/executives"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Executive Committee
              </Link>
              <Link
                href="/events"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Events
              </Link>
              <Link
                href="/news"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                News
              </Link>
              <Link
                href="/gallery"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Gallery
              </Link>
              <Link
                href="/videos"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Videos
              </Link>
              <Link
                href="/biodata"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Student Biodata
              </Link>
              <Link
                href="/hymns"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Hymns
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button className="w-full justify-center">Register</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
