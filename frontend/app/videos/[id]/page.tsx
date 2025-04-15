"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Share2, ThumbsUp, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

interface VideoDetailProps {
  params: {
    id: string;
  };
}

export default function VideoDetailPage({ params }: VideoDetailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // In a real application, you would fetch this data from an API or database
  const videos = [
    {
      id: "1",
      title: "BSFKBC ANNUAL RETREAT",
      duration: "00:30",
      date: "April 05, 2025",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
      description:
        "Watch the highlights from our 2022 Annual Conference featuring worship, keynote speakers, and fellowship activities. This video captures the essence of our annual gathering where Baptist students from across the region came together for spiritual growth, fellowship, and inspiration. The conference theme was 'Transformed by Christ' and featured keynote speakers including Rev. Dr. John Adebayo and Pastor Sarah Musa. Worship was led by the BSF Mass Choir, and various workshops were conducted on topics such as discipleship, evangelism, and Christian leadership.",
    },
    {
      id: "2",
      title: "Easter Celebration Service",
      duration: "48:32",
      date: "April 9, 2023",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
      description:
        "Full recording of our special Easter service celebrating the resurrection of Christ. This joyful celebration included special music, drama presentations, and an inspiring message on the significance of Christ's resurrection for our daily lives. The service was held at the Main Chapel and was attended by over 300 students and faculty members. The message was delivered by the BSF Chaplain, Rev. James Okonkwo, who emphasized how the resurrection gives us hope, purpose, and power for Christian living.",
    },
    {
      id: "3",
      title: "BSF Choir Performance",
      duration: "12:45",
      date: "April 15, 2023",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
      description:
        "Watch our award-winning choir perform 'Total Praise' and 'How Great Thou Art' at the Regional Gospel Choir Competition. Under the direction of Michael Johnson, our 25-member choir delivered a powerful and harmonious performance that earned them first place among 15 competing choirs. The judges commended the choir for their vocal technique, harmony, interpretation, and stage presence. This victory qualifies them for the national competition scheduled for August.",
    },
  ];

  const video = videos.find((item) => item.id === params.id) || videos[0];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <PageHeader title="Video" description="Watch and learn" />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/videos"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Videos</span>
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-secondary mb-4">
                {video.title}
              </h1>
              <div className="text-sm text-muted-foreground mb-6">
                {video.date} • {video.duration}
              </div>

              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  poster="/placeholder.svg?height=400&width=800"
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="gap-1 border-primary text-primary hover:bg-primary/10"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-1 border-primary text-primary hover:bg-primary/10"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Button
                  onClick={togglePlayPause}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isPlaying ? "Pause" : "Play"}
                </Button>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-secondary mb-4">
                    Description
                  </h2>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-secondary mb-4">
                Comments
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Comments are disabled for this video
                </span>
              </div>
              <Link href="/videos">
                <Button
                  variant="outline"
                  className="gap-1 border-primary text-primary hover:bg-primary/10"
                >
                  More Videos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
