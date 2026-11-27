import Tile from '../../components/layout/Tile';
import { Mtk, Meta } from '../../gi/ext';

interface ExtendedWindow extends Meta.Window {
    originalSize: Mtk.Rectangle | undefined;
    assignedTile: Tile | undefined;
    // the frame rect the window had right before it was maximized
    preMaximizeRect?: Mtk.Rectangle;
    // monotonic time (in microseconds) of when the window was created
    openedAt?: number;
}

export default ExtendedWindow;
