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
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LockKeyhole, UserCircle, Shield } from "lucide-react";

export default function BiodataPage() {
  return (
    <>
      <PageHeader
        title="Student Biodata"
        description="Manage your personal information and profile"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-secondary">Sign In</CardTitle>
                    <CardDescription>
                      Access your student profile and biodata
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m.example@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Button
                          variant="link"
                          className="text-xs text-primary p-0 h-auto"
                        >
                          Forgot password?
                        </Button>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Sign In
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-secondary">Register</CardTitle>
                    <CardDescription>
                      Create a new account to manage your student profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m.example@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter text-secondary text-center">
                About Student Biodata
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <UserCircle className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-secondary">
                      Personal Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Manage your personal information, contact details, and
                      academic information in one place.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LockKeyhole className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-secondary">
                      Secure Storage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your information is stored securely and is only accessible
                      to authorized personnel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-secondary">
                      Privacy Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Control what information is shared with other members of
                      the fellowship.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
