import { Container } from 'pixi.js';
import { GAME_HEIGHT, GAME_WIDTH, type GameOrientation, REELS_CONFIG } from '../utils/config';
import { ReelsView } from './reels/ReelsView';
import { WinFieldView } from './winField/WinFieldView';
import { FeatureView } from './feature/FeatureView';
import { BackgroundView } from './background/BackgroundView';
import { ReelsViewBackground } from './reels/frame/ReelsViewBackground';
import { CharacterSpineView } from './character/CharacterSpineView';

/**
 * Root Pixi container for the slot game scene.
 * Currently only hosts the reels, but later can include backgrounds, frames, etc.
 */
export class MainView extends Container {
  /** Host for Spine character. */
  public readonly characterSpineLayer: Container;
  public readonly characterSpineView: CharacterSpineView | null;
  public readonly reelsView: ReelsView;
  public readonly winFieldView: WinFieldView;
  public readonly featureView: FeatureView;
  public readonly backgroundView: BackgroundView;
  public readonly reelsViewBackground: ReelsViewBackground;
  constructor() {
    super();
    this.characterSpineLayer = new Container();
    this.backgroundView = new BackgroundView();
    this.reelsViewBackground = new ReelsViewBackground();
    this.winFieldView = new WinFieldView();
    this.reelsView = new ReelsView();
    this.characterSpineView = this.createCharacterSpineView();
    this.featureView = new FeatureView();
    if (this.characterSpineView) {
      this.characterSpineLayer.addChild(this.characterSpineView);
    }
    this.layoutReels();
    this.addChild(this.backgroundView);
    this.addChild(this.characterSpineLayer);
    this.addChild(this.reelsViewBackground);
    this.addChild(this.reelsView);
    this.addChild(this.winFieldView);
    this.addChild(this.featureView);

  }

  private layoutReels(): void {
    this.reelsView.layoutWithinFrame(
      this.reelsViewBackground.width,
      this.reelsViewBackground.height,
      GAME_WIDTH / 2,
      GAME_HEIGHT / 2,
    );
  }

  private createCharacterSpineView(): CharacterSpineView | null {
    try {
      return CharacterSpineView.create();
    } catch (error) {
      console.error('Failed to create Spine character:', error);
      return null;
    }
  }

  public resize(
    orientation: GameOrientation,
    gameWidth: number,
    gameHeight: number,
  ): void {
    this.characterSpineView?.resize(orientation, gameWidth, gameHeight);
    this.reelsViewBackground.resize(orientation, gameWidth, gameHeight);
    this.winFieldView.resize(orientation, gameWidth, gameHeight);
    this.reelsView.resize(orientation, gameWidth, gameHeight);
    this.featureView.resize(orientation, gameWidth, gameHeight);
  }
}

