draw() {
    if (this.index + 1 != this.imgList.length) {
        if (
            this.radio <
            this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW
        ) {
            if (this.willPause) {
                this.radio =
                    this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW;
                cancelAnimationFrame(this.timer);
            }
            this.index++;
            this.radio = 1;
            if (!this.imgList[this.index + 1]) {
                this.showEnd();
            }
        }
        this.imgNext = this.imgList[this.index + 1];
        this.imgCur = this.imgList[this.index];
        this.containerImage = this.domList[this.index + 1];
        this.innerImage = this.domList[this.index];
        this.drawImgOversize(
            this.containerImage,
            this.imgNext.imgW,
            this.imgNext.imgH,
            this.imgNext.areaW,
            this.imgNext.areaH,
            this.imgNext.areaL,
            this.imgNext.areaT,
            this.radio,
        ),
            this.drawImgMinisize(
                this.innerImage,
                this.imgCur.imgW,
                this.imgCur.imgH,
                this.imgNext.imgW,
                this.imgNext.imgH,
                this.imgNext.areaW,
                this.imgNext.areaH,
                this.imgNext.areaL,
                this.imgNext.areaT,
                this.radio,
            );
    }
}
