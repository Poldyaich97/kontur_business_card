declare module 'react-qr-code' {
    import { FC } from 'react';

    interface QRCodeProps {
        value: string;
        size?: number;
        style?: React.CSSProperties;
        // Другие параметры можно добавить по мере необходимости
    }

    const QRCode: FC<QRCodeProps>;
    export default QRCode;
}
