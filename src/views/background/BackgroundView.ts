import { Container, Sprite, Assets } from 'pixi.js';
import { GAME_HEIGHT, GAME_WIDTH } from '../../utils/config';

export class BackgroundView extends Container {
    private backgroundSprite!: Sprite;
    private backgroundPortraitSprite!: Sprite;

  constructor() {
    super();
    this.initialize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  protected initialize(): void {
    this.backgroundSprite = new Sprite(Assets.get('Background'));
    this.backgroundPortraitSprite = new Sprite(Assets.get('BackgroundPortrait'));

    this.backgroundSprite.anchor.set(0.5);
    this.backgroundPortraitSprite.anchor.set(0.5);

    this.backgroundSprite.width = GAME_WIDTH;
    this.backgroundSprite.height = GAME_HEIGHT;
    this.backgroundPortraitSprite.width = GAME_HEIGHT;
    this.backgroundPortraitSprite.height = GAME_WIDTH;

    // Center both backgrounds to fully cover the game area.
    this.backgroundSprite.x = GAME_WIDTH / 2;
    this.backgroundSprite.y = GAME_HEIGHT / 2;
    this.backgroundPortraitSprite.x = GAME_HEIGHT / 2;
    this.backgroundPortraitSprite.y = GAME_WIDTH / 2;

    this.addChild(this.backgroundSprite);
    this.addChild(this.backgroundPortraitSprite);

    this.resize();
  }

  override destroy(options?: Parameters<Container['destroy']>[0]): void {
    window.removeEventListener('resize', this.handleWindowResize);
    super.destroy(options);
  }

  private readonly handleWindowResize = (): void => {
    this.resize();
  };

  private resize(): void {
    const isPortrait = window.innerHeight > window.innerWidth;
    this.backgroundSprite.visible = !isPortrait;
    this.backgroundPortraitSprite.visible = isPortrait;
  }
}