interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-accent py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
              {title}
            </h1>
            {description && (
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
