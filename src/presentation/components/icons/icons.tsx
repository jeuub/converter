import React from "react";

import { ArrowDown } from "./arrow-down";

enum IconsType {
  "ARROW_DOWN",
}

export const Icons = (name: keyof typeof IconsType) => {
  switch (name) {
    case "ARROW_DOWN":
      return <ArrowDown />;
  }
};

export const images = [
  {
    code: "BTC",
    image: "https://cdn.cdnlogo.com/logos/b/46/bitcoin.svg",
  },
  {
    code: "ETH",
    image: "https://cdn.cdnlogo.com/logos/e/81/ethereum-eth.svg",
  },
  {
    code: "CASHUSD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dollar_sign_in_circle_cleaned_%28PD_version%29.svg/2048px-Dollar_sign_in_circle_cleaned_%28PD_version%29.svg.png",
  },
  {
    code: "CASHRUB",
    image: "https://static.thenounproject.com/png/92314-200.png",
  },
  {
    code: "USDTTRC",
    image: "https://cdn.cdnlogo.com/logos/c/23/compound-usdt.svg",
  },
  {
    code: "ACRUB",
    image:
      "https://alfabank.servicecdn.ru/media/footer-alfa-logo_1025x1025_common_19-01-2021.svg",
  },
  {
    code: "TCSBRUB",
    image:
      "https://acdn.tinkoff.ru/static/pages/files/df383263-9bc9-4b81-b416-a7c5c694f818.svg",
  },
  {
    code: "SBERRUB",
    image:
      "https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/android-chrome-192x192.png",
  },
  {
    code: "QWRUB",
    image:
      "https://w7.pngwing.com/pngs/408/844/png-transparent-qiwi-ps-yandex-money-llc-e-commerce-payment-system-others-text-service-orange-thumbnail.png",
  },
  {
    code: "CARDUAH",
    image:
      "https://e7.pngegg.com/pngimages/415/124/png-clipart-mastercard-visa-bank-card-payment-mastercard-text-service.png",
  },
  {
    code: "PMUSD",
    image: "http://delodom.com/wp-content/uploads/2022/05/2.png",
  },
  {
    code: "TRX",
    image:
      "https://seeklogo.com/images/T/tron-logo-AB645834BE-seeklogo.com.png",
  },
  {
    code: "P24UAH",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Privat24_Logo.png",
  },
  {
    code: "MONOBUAH",
    image:
      "https://feeltime.com.ua/design/feeltime_theme/images/monobank-paw.png",
  },
  {
    code: "WIREUAH",
    image: "https://cdn-icons-png.flaticon.com/512/94/94648.png",
  },
  {
    code: "OSDBUAH",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Oschad_Bank.svg/1094px-Oschad_Bank.svg.png",
  },
  {
    code: "CASHAED",
    image: "http://cdn.onlinewebfonts.com/svg/img_455809.png",
  },
  {
    code: "CNTRUB",
    image:
      "https://w7.pngwing.com/pngs/408/844/png-transparent-qiwi-ps-yandex-money-llc-e-commerce-payment-system-others-text-service-orange-thumbnail.png",
  },
];
