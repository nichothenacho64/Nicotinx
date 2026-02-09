export default function AboutMeButtons({ goToPreviousImage, goToNextImage, isFirstPage, isLastPage }: {
    goToPreviousImage: () => void;
    goToNextImage: () => void;
    isFirstPage: boolean;
    isLastPage: boolean;
}) {
    return (
        <div className="flex gap-4 mt-4">
            <button
                className="small-button bg-(--blue-default)"
                onClick={goToPreviousImage}
                disabled={isFirstPage}
            >
                ← Say less
            </button>
            <button
                className="small-button bg-(--blue-default)"
                onClick={goToNextImage}
                disabled={isLastPage}
            >
                Say more →
            </button>
        </div>
    );
}