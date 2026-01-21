export function CanvaEmbedSkeleton() {
    return (
        <div className="relative bg-muted rounded-xl w-full aspect-video overflow-hidden animate-pulse">
            {/* top shimmer bar */}
            <div className="top-0 left-0 absolute bg-muted-foreground/10 w-full h-1" />

            {/* subtle centre hint */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-muted-foreground/10 rounded w-48 h-20" />
            </div>
        </div>
    );
}
