export type ServiceItem = {
  name: string;
  price: string;
  desc: string;
};

export type ServiceSection = {
  id: string;
  header: string;
  prelude?: string;
  bookingLabel: string;
  items: ServiceItem[];
};

const externalBookingUrl = "https://haircutsinc.zenoti.com/webstoreNew/services";

export const getServicesBookingHref = () => externalBookingUrl;

export const servicesSections: ServiceSection[] = [
  {
    id: "mens-haircuts",
    header: "Men's haircuts",
    bookingLabel: "Men's Haircuts",
    items: [
      {
        name: "Men's Basic Haircut",
        price: "$24",
        desc: "Our standard haircut. No wash, bald fades, mullets, or flat tops. Add a wash for $6.",
      },
      {
        name: "Kid's and Seniors Basic Haircut",
        price: "$20",
        desc: "Our standard haircut for 10 and under or 60+. No bald fades, mullets, or flat tops.",
      },
      {
        name: "Men's Specialty Haircut",
        price: "$29",
        desc: "Includes Bald fades, Mullets, Flat tops, etc. Wash not included.",
      },
      {
        name: "Men's Haircut, Wash, and Style",
        price: "$30",
        desc: "Includes a basic haircut, relaxing scalp massage with wash, massage chair, and finished off with some styling.",
      },
      {
        name: "Razor Fade and Wash",
        price: "$40",
        desc: "Includes specialty haircut with straight razor fade, relaxing scalp massage with wash, massage chair, and finished off with some styling.",
      },
      {
        name: "Men's Haircut, Beard trim, Wash, and Style",
        price: "$44",
        desc: "Includes a basic haircut, beard trim/shaping, wash with a relaxing scalp massage, massage chair, and hair styling.",
      },
      {
        name: "Men's Haircut, Face Shave, Wash, and Style",
        price: "$50",
        desc: "Specialty or Basic Haircut, straight razor face shave, multiple hot towels with face steamer, wash with scalp massage and chair massage plus hair styling.",
      },
      {
        name: "Beard Trim/Shaping",
        price: "$20",
        desc: "Fade the beard into the hairline, trim, shape, and finish with some beard oil and/or beard balm.",
      },
      {
        name: "Head Shave",
        price: "$40",
        desc: "Head shave with a straight razor, and hot towel, wash with relaxing scalp massage and chair massage.",
      },
    ],
  },
  {
    id: "womens-haircuts",
    header: "Women's Haircuts",
    bookingLabel: "Women's Haircuts",
    items: [
      {
        name: "Women's Basic Haircut",
        price: "$24",
        desc: "Our standard haircut. No pixie, a-line, or drastic changes.",
      },
      {
        name: "Women's Specialty Haircut",
        price: "$29",
        desc: "Pixie, A-line, drastic changes, and uniques styles.",
      },
      {
        name: "Women's Haircut & Wash",
        price: "$30",
        desc: "Basic Haircut, wash & condition, scalp massage, chair massage. (Does not include blow dry/style for long hair.)",
      },
      {
        name: "Bang Trim",
        price: "$10",
        desc: "A standard bang trimming.",
      },
      {
        name: "Women's Haircut, Wash, and Style",
        price: "$60",
        desc: "Basic or Specialty haircut, wash & condition, scalp massage, chair massage, and blowout styling included.",
      },
    ],
  },
  {
    id: "hair-color",
    header: "Hair Color",
    prelude:
      "All hair color costs are estimates and may change based on length and thickness of hair as well as complexity of color change. Please book a free consultation to get a more accurate quote.",
    bookingLabel: "Hair Color",
    items: [
      {
        name: "Consultation",
        price: "$0",
        desc: "ATTN NEW COLOR CLIENTS! Meet with one of our stylists to discuss your goals, assess your hair, and create a personalized plan. If needed, we'll perform a strand test to ensure safe, beautiful results. Book your consultation for free to start your color journey with confidence. If you are a new color client, please book this consultation or call us before booking a color service below.",
      },
      {
        name: "Root Retouch",
        price: "$75",
        desc: "Maintain your flawless allure with our root retouch service. This service is intended for up to an inch of regrowth. More than an inch is our \"All over color\" service.",
      },
      {
        name: "Bleach Retouch",
        price: "$100",
        desc: "The Bleach retouch service is applicable for up to one inch of regrowth. More than that will be considered an \"All over bleach\".",
      },
      {
        name: "Highlight Retouch",
        price: "$125",
        desc: "This highlight retouch covers up to an inch of regrowth. More than an inch is considered \"Highlights/Lowlights\".",
      },
      {
        name: "All over color - Short Hair",
        price: "$100",
        desc: "Immerse yourself in a world of color transformation with our all over color service - For hair shoulder length or shorter.",
      },
      {
        name: "All over color - Medium/Long Hair",
        price: "$135",
        desc: "Experience the magic of our 'Total Hue' service, where your hair is enveloped in a single, harmonious shade, giving you a refreshed and vibrant look. This service is for hair longer than shoulder length.",
      },
      {
        name: "Highlights/Lowlights - Short Hair",
        price: "$125",
        desc: "Experience the art of contrast with our highlight and lowlight service, adding depth and dimension to your hair for a striking and dynamic style. Hair length above shoulders.",
      },
      {
        name: "Highlights/Lowlights - Medium/Long Hair",
        price: "$150",
        desc: "Discover the beauty of balance through our highlight and lowlight expertise, as we play with light and shadow to create a personalized, captivating hair transformation. Hair length past shoulders.",
      },
      {
        name: "Balayage - Short Hair",
        price: "$125",
        desc: "Transform your hair with our expert balayage technique, creating seamless, sun-kissed highlights that elevate your natural beauty. Hair above shoulders.",
      },
      {
        name: "Balayage - Medium/Long Hair",
        price: "$150",
        desc: "Elevate your look with our precision balayage artistry, painting graceful highlights that blend effortlessly for a radiant finish. Hair below shoulders.",
      },
      {
        name: "Grey Blending",
        price: "$45",
        desc: "Men, embrace graceful aging with our grey blending service, where modern techniques harmoniously blend greys to achieve a distinguished and youthful look.",
      },
      {
        name: "Men's Partial Bleach",
        price: "$75",
        desc: "Unleash your boldness with our men's partial bleach service, adding a touch of edgy charm as we expertly lighten specific sections for a confident and contemporary style.",
      },
      {
        name: "All over Bleach - Short Hair",
        price: "$125",
        desc: "All over bleach service for short hair is intended for hair above the shoulders.",
      },
      {
        name: "All over Bleach - Long Hair",
        price: "$145",
        desc: "All over bleach service for long hair is intended for hair below the shoulders.",
      },
      {
        name: "Color Correction",
        price: "$60",
        desc: "If we need to remove unwanted color, lift box dyes, fix prior mistakes from other salons, we charge a color correction price of $60/hour. Please come in for consultation prior to booking appointment.",
      },
    ],
  },
  {
    id: "textures",
    header: "Textures",
    bookingLabel: "Textures",
    items: [
      {
        name: "Top Perm",
        price: "$80",
        desc: "Only perming the top of the head, not the sides or back. 3-4 inches of hair length is ideal (or more).",
      },
      {
        name: "Short Hair Perm",
        price: "$100",
        desc: "Perm the top, sides, and back. Short hair is above the shoulders.",
      },
      {
        name: "Long Hair Perm",
        price: "$140",
        desc: "Full perm for hair that is shoulder length or longer. $20 for each extra box of solution (only needed for extra thick/long hair types. Often needed for long hair perms)",
      },
    ],
  },
  {
    id: "other-services",
    header: "Other Services",
    bookingLabel: "Other Services",
    items: [
      {
        name: "Wax (Ears, Nose, Lips, Brows, etc)",
        price: "$10",
        desc: "1 Location - $10, 2 Locations - $18, 3 Locations - $25",
      },
      {
        name: "Deep Conditioning Treatment",
        price: "$20",
        desc: "Nourish and rejuvenate your hair with our luxurious deep conditioning treatment. This restorative service is designed to repair, hydrate, and strengthen your locks, leaving them silky-smooth, healthy, and ready to shine.",
      },
      {
        name: "Tea Tree Experience",
        price: "$20",
        desc: "Treat your hair and scalp to a revitalizing journey with our Tea Tree Experience. Infused with the natural goodness of tea tree oil, this invigorating service cleanses, refreshes, and soothes your scalp while leaving your hair feeling refreshed and rejuvenated.",
      },
      {
        name: "Metal Detox",
        price: "$20",
        desc: "Our Metal Detox service is designed to purify your hair from the harmful effects of metal buildup caused by environmental factors and everyday water exposure particular to Utah's water. This deep-cleansing treatment removes unwanted metals like copper and iron that can dull your hair and affect the vibrancy of your color treatments. Benefits of Metal Detoxing include: Restoring Shine, Enhancing Color, Strengthening Hair, and Improving texture.",
      },
    ],
  },
];

