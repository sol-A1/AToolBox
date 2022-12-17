import React from 'react';
import QRious from 'qrious';

function QRcodeGenerator(props) {
  const { value } = props;
  const qr = new QRious({
    value,
    size: 200
  });
  return <img src={qr.toDataURL()} alt="QR code" />;
}

export default QRcodeGenerator;
