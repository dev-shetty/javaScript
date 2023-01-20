abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void
  getShorts(): number {
    return 8
  }
}

// const dev = new TakePhoto("portrait", "normal") // cant create object for abstract classes

class GitHub extends TakePhoto {
  constructor(
    public camerMode: string,
    public filter: string,
    public burst: number
  ) {
    super(camerMode, filter)
  }
  getSepia(): void {
    console.log("Sepia")
  }
}

const dev = new GitHub("portrait", "normal", 5)
dev.getShorts()
