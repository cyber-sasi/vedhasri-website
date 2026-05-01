const products = [
  { 
    id: 45, 
    name: "Mi Antibacterial Dishwash Round Bar 500 Gms", 
    price: 88, 
    category: "homecare", 
    image: "assets/images/img45.png", 
    benefits: [
      "Strong antibacterial action to eliminate germs",
      "Cuts through tough oil and grease effortlessly",
      "Economical round shape for longer usage",
      "Gentle formula that doesn't dry out your hands"
    ],
    description: "Keep your utensils safe and sparkling with our antibacterial dishwash bar. It combines powerful cleaning agents with skin-friendly ingredients to provide a hygienic wash every time.",
    isFeatured: true, 
    productCode: "IS15270",
    code: "IS15270"
  },
  { 
    id: 46, 
    name: "Mi Home Kill&shine Powerful Toilet Cleaner 500 ml", 
    price: 110, 
    category: "homecare", 
    image: "assets/images/img46.png", 
    benefits: [
      "Eliminates 99.9% of disease-causing germs",
      "Removes stubborn yellow stains and limescale",
      "Leaves a refreshing fragrance after cleaning",
      "Special nozzle design for easy reach under the rim"
    ],
    description: "A high-performance toilet cleaner that provides complete disinfection and a brilliant shine. Its thick liquid formula clings to the surface for deeper cleaning and long-lasting freshness.",
    isFeatured: false, 
    productCode: "IS15271",
    code: "IS15271"
  },
  { 
    id: 47, 
    name: "Mi Home Disinfectant Floor Cleaner 500 ml", 
    price: 132, 
    category: "homecare", 
    image: "assets/images/img47.png", 
    benefits: [
      "Multi-surface cleaning for tiles, marble, and granite",
      "Kills household germs to keep floors safe for kids",
      "Refreshing floral scent that lasts for hours",
      "Quick-drying formula that leaves no sticky residue"
    ],
    description: "Ensure a germ-free environment for your family with our powerful floor cleaner. It effectively removes dust and grime while leaving your home smelling fresh and inviting.",
    isFeatured: false, 
    productCode: "IS15272",
    code: "IS15272"
  },
  { 
    id: 48, 
    name: "Mi Home Lemon Fresh Clean&shine Dishwash Liquid 500 ml", 
    price: 165, 
    category: "homecare", 
    image: "assets/images/img48.png", 
    benefits: [
      "Concentrated liquid for superior grease removal",
      "Infused with natural lemon extracts for freshness",
      "Leaves no white residue on expensive glassware",
      "Safe and mild on sensitive skin"
    ],
    description: "Experience the power of lemon with our concentrated dishwash liquid. It provides an effortless cleaning experience, leaving your dishes shiny and smelling like fresh citrus.",
    isFeatured: false, 
    productCode: "IS15273",
    code: "IS15273"
  },
  { 
    id: 49, 
    name: "Mi Home Max Brite Matic Liquid Laundry Detergent 500 ml", 
    price: 242, 
    category: "homecare", 
    image: "assets/images/img49.png", 
    benefits: [
      "Specifically designed for washing machines",
      "Preserves fabric color and texture after every wash",
      "Dissolves quickly even in cold water",
      "Provides a long-lasting, fresh scent to clothes"
    ],
    description: "Our premium liquid detergent provides professional-grade cleaning for all your laundry needs. It penetrates deep into fibers to remove tough stains while keeping your clothes soft and bright.",
    isFeatured: false, 
    productCode: "IS15274",
    code: "IS15274"
  }
];

const personalCareProducts = [
  { id: 50, name: "Elements Wellness Whitening Body Lotion 100 ml", price: 220, image: "assets/images/img50.png", productCode: "IS13375",
    benefits: [
      "Visibly lightens skin tone and fades dark spots",
      "Triple-action formula with Saffron and Licorice",
      "Provides deep hydration and long-lasting softness",
      "Protects skin from environmental damage",
      "Restores natural radiance for a glowing look"
    ],
    description: "Experience brighter and more even-toned skin with our advanced whitening body lotion. Enriched with natural brightening extracts, it nourishes your skin while helping to reduce blemishes and restore your natural glow."
  },
  { id: 51, name: "Elements Wellness Cocoa Butter Body Lotion 200 ml", price: 264, image: "assets/images/img51.png", productCode: "IS13376",
    benefits: [
      "Intensive moisturization for extremely dry skin",
      "Rich in natural antioxidants and fatty acids",
      "Improves skin elasticity and prevents stretch marks",
      "Leaves skin feeling velvety smooth and supple",
      "Delightful chocolate aroma for a premium feel"
    ],
    description: "Pamper your skin with the rich goodness of Cocoa Butter. This luxurious lotion provides deep hydration, helping to repair dry and damaged skin while leaving it smelling wonderful and feeling incredibly soft."
  },
  { id: 52, name: "Elements Wellness Intense Moisturising Body Lotion 200 ml", price: 286, image: "assets/images/img52.png", productCode: "IS13377",
    benefits: [
      "Locks in moisture for up to 24 hours",
      "Specifically formulated for very dry skin types",
      "Contains skin-repairing natural vitamins",
      "Non-greasy formula that absorbs instantly",
      "Protects against winter dryness and flakiness"
    ],
    description: "Provide your skin with the ultimate moisture boost. Our intense moisturizing lotion is designed to penetrate deep into skin layers, providing long-lasting hydration and keeping your skin healthy and comfortable all day."
  },
  { id: 53, name: "Elements Wellness Emollient Body Cream 200 ml", price: 286, image: "assets/images/img53.png", productCode: "IS13378",
    benefits: [
      "Creates a protective barrier to lock in moisture",
      "Perfect for rough areas like elbows and knees",
      "Deeply nourishes and heals cracked skin",
      "Rich, creamy texture for intensive care",
      "Soothes itching and irritation from dryness"
    ],
    description: "Target rough and dry skin areas with our rich emollient cream. Its intensive formula provides deep nourishment, helping to heal and soften the most stubborn dry patches for a smooth, healthy appearance."
  },
  { id: 54, name: "Elements Wellness Rose & Glycerine Moisturising Hand Wash 500 ml", price: 440, image: "assets/images/img54.png", productCode: "IS13379",
    benefits: [
      "Effectively kills germs while being gentle",
      "Glycerine helps maintain moisture levels",
      "Refreshing rose fragrance for a pleasant wash",
      "Soap-free formula that doesn't dry out hands",
      "Ideal for frequent use throughout the day"
    ],
    description: "Keep your hands clean and soft with our moisturizing hand wash. It combines the refreshing scent of roses with the hydrating power of glycerine, ensuring your hands are hygienic and nourished after every wash."
  },
  { id: 55, name: "Elements Wellness 8 In 1 Hair Conditioner", price: 451, image: "assets/images/img55.png", productCode: "IS14006",
    benefits: [
      "Total hair repair and nourishment in one step",
      "Reduces frizz and makes hair easy to manage",
      "Adds a natural, healthy shine to dull hair",
      "Strengthens hair strands to prevent breakage",
      "Protects hair from heat and pollution damage"
    ],
    description: "Transform your hair with our multi-benefit conditioner. Designed to address 8 common hair concerns, it provides deep nourishment and protection, leaving your hair feeling silky, strong, and beautiful."
  },
  { id: 56, name: "Elements Wellness Complete Care Shampoo 200 ml", price: 332, image: "assets/images/img56.png", productCode: "IS13187",
    benefits: [
      "Gently cleanses scalp without stripping oils",
      "Infused with Almond Milk for hair strength",
      "Suitable for all hair types and daily use",
      "Makes hair soft, smooth, and more manageable",
      "Promotes a healthy and balanced scalp"
    ],
    description: "Give your hair the complete care it deserves. Our gentle shampoo cleanses effectively while providing essential nutrients to your hair and scalp, ensuring your hair stays healthy and shiny from root to tip."
  },
  { id: 57, name: "Elements Wellness Anti Dandruff Shampoo 200 ml", price: 332, image: "assets/images/img57.png", productCode: "IS13188",
    benefits: [
      "Effective relief from dandruff and itchy scalp",
      "Clears flakes while maintaining scalp moisture",
      "Enriched with natural antibacterial agents",
      "Prevents recurrence of dandruff with regular use",
      "Leaves hair smelling fresh and feeling clean"
    ],
    description: "Eliminate dandruff and soothe your scalp with our specialized anti-dandruff shampoo. Its powerful yet gentle formula addresses the root cause of flakes while keeping your hair soft and hydrated."
  },
  { id: 58, name: "Elements Wellness Acti Fresh Shave Gel", price: 274, image: "assets/images/img58.png", productCode: "IS14004",
    benefits: [
      "Allows for an ultra-smooth blade glide",
      "Reduces cuts, nicks, and razor burns",
      "Contains Aloe Vera to soothe and cool skin",
      "Clear gel for better visibility during shaving",
      "Leaves skin feeling fresh and hydrated"
    ],
    description: "Upgrade your shaving experience with our Acti-Fresh Shave Gel. Its specialized formula provides a protective layer for your skin, ensuring a close, comfortable shave while keeping your skin calm and refreshed."
  },
  { id: 59, name: "Elements Wellness Multi Action Complexion Cream", price: 374, image: "assets/images/img59.png", productCode: "IS13229",
    benefits: [
      "Provides an instant radiant glow to the face",
      "Protects skin from harmful UV rays (SPF)",
      "Helps fade dark spots and even out skin tone",
      "Moisturizes and rejuvenates skin cells",
      "Perfect base for daily makeup or as a stand-alone"
    ],
    description: "Get a flawless and glowing complexion with our multi-action cream. It works by nourishing your skin and protecting it from sun damage, helping you achieve a bright and healthy look every single day."
  },
  { id: 60, name: "Elements Wellness Radiant Glow Face Wash Soap Free 100 Gms", price: 258, image: "assets/images/img60.png", productCode: "IS13331",
    benefits: [
      "Gentle, soap-free cleansing for all skin types",
      "Removes dirt, oil, and pollution effectively",
      "Maintains natural skin moisture and pH balance",
      "Leaves face feeling fresh, soft, and glowing",
      "Enriched with skin-loving vitamins and minerals"
    ],
    description: "Start your day with a fresh glow. Our soap-free face wash gently removes impurities without drying out your skin, ensuring your face stays hydrated and looks naturally radiant throughout the day."
  },
  { id: 61, name: "Elements Wellness 3 In 1 Face Wash 60 Gms", price: 198, image: "assets/images/img61.png", productCode: "IS13380",
    benefits: [
      "Triple action: Cleansing, Scrubbing, and Masking",
      "Deeply unclogs pores and removes blackheads",
      "Gently exfoliates dead skin for a smooth look",
      "Helps control excess oil and prevents acne",
      "Convenient travel-sized tube for on-the-go care"
    ],
    description: "Simplify your skincare routine with our 3-in-1 face wash. It combines the power of a cleanser, scrub, and pack to provide deep cleaning and rejuvenation, making it perfect for maintaining clear and healthy skin."
  },
  { id: 62, name: "Elements Wellness Young And Beautiful Under Eye Gel 15 Gms", price: 297, image: "assets/images/img62.png", productCode: "IS13383",
    benefits: [
      "Reduces the appearance of dark circles",
      "Helps minimize under-eye puffiness and bags",
      "Firms and hydrates the delicate eye area",
      "Prevents fine lines and crow's feet",
      "Fast-absorbing gel formula for daily use"
    ],
    description: "Refresh and brighten your eyes with our specialized under-eye gel. Its lightweight formula provides intensive care for the sensitive skin around your eyes, helping you look well-rested and youthful."
  },
  { id: 63, name: "Neustar Neem & Tulsi Deodorising Soap 100 Gms", price: 48, image: "assets/images/img63.png", productCode: "IS13515",
    benefits: [
      "Natural antibacterial protection for the body",
      "Effectively removes body odor and sweat",
      "Soothes skin irritations and minor rashes",
      "Gentle cleansing suitable for daily use",
      "Enriched with pure Neem and Tulsi extracts"
    ],
    description: "Stay fresh and protected with the power of nature. This deodorizing soap uses traditional herbs to cleanse your skin and keep away germs, ensuring you feel clean and confident all day long."
  },
  { id: 64, name: "Neustar Lime & Aloevera Skin Care Soap 100 Gms", price: 48, image: "assets/images/img64.png", productCode: "IS13516",
    benefits: [
      "Refreshing lime scent to energize your bath",
      "Aloe Vera keeps skin hydrated and soft",
      "Effectively removes dirt and excess oil",
      "Maintains natural skin softness and health",
      "Provides a cooling and soothing sensation"
    ],
    description: "Experience a burst of freshness with our Lime and Aloe Vera soap. It provides a deep cleanse while ensuring your skin stays moisturized, making every bath a rejuvenating experience for your body and mind."
  },
  { id: 65, name: "Neustar Rose Fragrant Beauty Soap 100 Gms", price: 48, image: "assets/images/img65.png", productCode: "IS13517",
    benefits: [
      "Delightful rose fragrance that lasts long",
      "Skin conditioning for a soft and smooth feel",
      "Gentle on the skin and perfect for all ages",
      "Cleanses effectively while being mild",
      "Gives a luxurious and pampered bath feel"
    ],
    description: "Indulge in the classic fragrance of roses with our beauty soap. Its mild formula cleanses your skin gently while leaving it feeling soft and smelling wonderful, adding a touch of luxury to your daily routine."
  },
  { id: 66, name: "Neustar Jasmine & Almond Moisturising Soap 100 Gms", price: 48, image: "assets/images/img66.png", productCode: "IS13523",
    benefits: [
      "Intense moisturization with pure Almond Oil",
      "Calming Jasmine aroma for a relaxing bath",
      "Heals dry and flaky skin effectively",
      "Leaves skin feeling supple and nourished",
      "Perfect for dry to normal skin types"
    ],
    description: "Nourish your skin with the goodness of almonds and the scent of jasmine. This moisturizing soap is specially designed to hydrate your skin during cleaning, helping you maintain a soft and healthy skin texture."
  },
  { id: 67, name: "Neustar Anti Bacterial Triple Action Soap 100 Gms", price: 48, image: "assets/images/img67.png", productCode: "IS13524",
    benefits: [
      "Triple action: Protection, Cleansing, and Care",
      "Kills 99.9% of harmful bacteria and germs",
      "Provides a deep and hygienic body wash",
      "Safe and mild for the entire family",
      "Prevents skin infections and body odor"
    ],
    description: "Get comprehensive protection for your family with our Triple Action soap. It provides a powerful antibacterial cleanse while ensuring your skin stays healthy and cared for, making it an essential for daily hygiene."
  },
  { id: 68, name: "Neustar Sandal Soap With Pro Health 100 Gms", price: 48, image: "assets/images/img68.png", productCode: "IS13525",
    benefits: [
      "Traditional Sandalwood for skin brightening",
      "Helps control pimples and minor blemishes",
      "Reduces skin tan and evens out skin tone",
      "Iconic and soothing sandalwood fragrance",
      "Promotes a healthy and clear complexion"
    ],
    description: "Unlock the beauty secrets of sandalwood with our Sandal soap. It works by gently brightening your skin and controlling oil, giving you a clear and radiant look while surrounding you with a calming aroma."
  },
  { id: 70, name: "Neustar Perfumed Talc 300 Gms", price: 176, image: "assets/images/img69.png", productCode: "IS13526",
    benefits: [
      "Provides all-day freshness and fragrance",
      "Effectively absorbs excess sweat and moisture",
      "Keeps skin soft, smooth, and dry",
      "Prevents body odor and skin friction",
      "Fine texture that's gentle on the skin"
    ],
    description: "Stay dry and smell great throughout the day with our perfumed talc. Its fine, absorbent powder keeps you fresh even in hot weather, providing a smooth finish and a long-lasting pleasant scent."
  },
  { id: 71, name: "Neustar Coconut Shampoo & Conditioner Tube 30 ml", price: 34, image: "assets/images/img70.png", productCode: "IS13527",
    benefits: [
      "Convenient 2-in-1 shampoo and conditioner",
      "Nourishing coconut oil for hair strength",
      "Perfect travel-sized tube for on-the-go use",
      "Repairs damaged hair and adds natural shine",
      "Leaves hair soft, smooth, and manageable"
    ],
    description: "Get the benefit of both cleaning and conditioning in a single step. Our coconut-infused formula nourishes your hair while cleaning, making it the perfect companion for your travels or busy schedule."
  },
  { id: 72, name: "Neustar Amla Hair Oil 200 ml", price: 166, image: "assets/images/img71.png", productCode: "IS13533",
    benefits: [
      "Strengthens hair roots and reduces breakage",
      "Rich in natural Vitamin C for scalp health",
      "Prevents premature greying with regular use",
      "Promotes thick, black, and shiny hair growth",
      "Fights dandruff and keeps the scalp cool"
    ],
    description: "Give your hair the traditional care of Amla. This nourishing hair oil penetrates deep into the scalp to provide essential nutrients, ensuring your hair stays strong, healthy, and naturally beautiful."
  },
  { id: 73, name: "Neustar Papaya Facewash 100 ml", price: 154, image: "assets/images/img72.png", productCode: "IS13529",
    benefits: [
      "Natural Papaya extracts for skin brightening",
      "Gently exfoliates dead skin and removes tan",
      "Effectively clears dirt and excess sebum",
      "Provides a fresh and glowing complexion",
      "Soap-free and mild formula for daily use"
    ],
    description: "Achieve a brighter and more radiant face with our Papaya face wash. It works by gently removing impurities and dead skin cells, helping to reveal your natural skin tone and keep your face looking fresh and vibrant."
  },
  { id: 74, name: "Neustar 100% Pure Esoft Petroleum Jelly 50 Gms", price: 66, image: "assets/images/img73.png", productCode: "IS13531",
    benefits: [
      "Intensive care for dry and cracked skin",
      "Perfect for softening lips, heels, and elbows",
      "Creates a moisture barrier against winter air",
      "Soothes minor skin irritations and itching",
      "100% pure and safe for all skin types"
    ],
    description: "Provide your skin with the ultimate protection against dryness. Our pure petroleum jelly locks in moisture and helps heal rough or cracked areas, ensuring your skin stays soft and comfortable in any weather."
  },
  { id: 75, name: "On&on Strawberry Body Butter Cream 100 Gms", price: 330, image: "assets/images/img74.png", productCode: "IS11634",
    benefits: [
      "Provides intense and deep skin moisturization",
      "Rich in vitamins and antioxidants for skin health",
      "Leaves skin with a sweet strawberry fragrance",
      "Heals extremely dry and rough skin areas",
      "Gives a soft and velvety feel to the entire body"
    ],
    description: "Indulge in the fruity goodness of our Strawberry Body Butter. Its thick and creamy texture provides a luxurious moisture boost, keeping your skin hydrated and smelling like fresh strawberries all day."
  },
  { id: 76, name: "Neustar Neem Facewash For Anti Acne 100 ml", price: 154, image: "assets/images/img75.png", productCode: "IS13528",
    benefits: [
      "Actively fights acne-causing bacteria with Neem",
      "Deeply cleanses pores and removes excess oil",
      "Soothes inflammation and reduces redness",
      "Prevents future breakouts and blackheads",
      "Soap-free formula that doesn't over-dry skin"
    ],
    description: "Get clear and healthy skin with our Neem face wash. Designed specifically for acne-prone skin, it provides a deep and effective cleanse while maintaining your skin's natural balance for a blemish-free look."
  },
  { id: 77, name: "Neustar All Natural Blemish Control Walnut Scrub 100 Gms", price: 176, image: "assets/images/img76.png", productCode: "IS13530",
    benefits: [
      "Natural Walnut shell particles for deep exfoliation",
      "Removes dead skin cells and stubborn blackheads",
      "Unclogs pores and improves skin texture",
      "Leaves skin feeling fresh, smooth, and renewed",
      "Helps in better absorption of other skincare products"
    ],
    description: "Revitalize your skin with our natural walnut scrub. It gently yet effectively removes impurities and dead skin, revealing the fresh and glowing skin underneath. Regular use helps keep your complexion clear and smooth."
  },
  { id: 78, name: "On&on Maha Bhringraj Herbal Hair Oil 200 ml", price: 430, image: "assets/images/img77.png", productCode: "IS15006",
    benefits: [
      "Traditional Ayurvedic formula for hair growth",
      "Strengthens hair from root to tip significantly",
      "Helps reduce hair fall and premature thinning",
      "Promotes thick, dark, and voluminous hair",
      "Nourishes the scalp and prevents itchiness"
    ],
    description: "Experience the power of Maha Bhringraj for your hair. This premium herbal oil is designed to provide intensive nourishment to your follicles, helping you achieve the thick and healthy hair you've always wanted."
  },
  { id: 79, name: "Elements Wellness Day Protection Cream", price: 671, image: "assets/images/img78.png", productCode: "IS14951",
    benefits: [
      "Shields skin from harmful UV rays and pollution",
      "Provides all-day hydration and protection",
      "Acts as a perfect base for daily makeup",
      "Helps prevent premature skin aging and spots",
      "Lightweight formula that doesn't feel heavy"
    ],
    description: "Protect your beauty every day with our specialized Day Protection Cream. It provides a defensive layer against environmental stressors while keeping your skin moisturized and glowing throughout your busy day."
  },
  { id: 80, name: "Elements Wellness 12 in 1 Night Repair Cream 25 ml", price: 671, image: "assets/images/img79.png", productCode: "IS14952",
    benefits: [
      "Works overnight to repair and rejuvenate skin",
      "12-in-1 action for comprehensive anti-aging",
      "Boosts skin elasticity and reduces fine lines",
      "Deeply nourishes skin during its natural repair cycle",
      "Wake up to softer, smoother, and younger-looking skin"
    ],
    description: "Transform your skin while you sleep. Our advanced night repair cream uses the body's natural nighttime cycle to deliver intensive nutrients, helping to repair damage and restore your skin's youthful radiance by morning."
  },
  { id: 81, name: "On & On Hair Colour Shampoo 20 ml", price: 97, image: "assets/images/img80.png", productCode: "IS15234",
    benefits: [
      "Natural-looking hair color in just a few minutes",
      "Convenient shampoo format for easy application",
      "Provides 100% grey coverage with long-lasting effect",
      "Enriched with herbs that protect hair health",
      "No ammonia or harsh chemicals for safe coloring"
    ],
    description: "Say goodbye to grey hair effortlessly. Our innovative hair color shampoo allows you to color your hair during a regular wash, providing a natural look and leaving your hair soft and conditioned."
  },
  { id: 82, name: "Neustar Tooth Brush Pack Of 4", price: 112, image: "assets/images/img81.png", productCode: "IS11631",
    benefits: [
      "Superior quality bristles for effective cleaning",
      "Ergonomic handle design for a comfortable grip",
      "Gentle on gums while removing plaque",
      "Reaches hard-to-access areas of the mouth",
      "Economical pack for the entire family"
    ],
    description: "Ensure a complete and comfortable clean every morning. Our high-quality toothbrushes are designed to provide effective plaque removal while being gentle on your sensitive gum tissues."
  },
  { id: 83, name: "Elements Wellness Red Herbal Paste 150 Gms", price: 182, image: "assets/images/img82.png", productCode: "IS13181",
    benefits: [
      "Traditional red herbal formula for gum health",
      "Provides long-lasting protection against cavities",
      "Fights bad breath and keeps mouth fresh",
      "Strengthens tooth enamel naturally",
      "Effective against plaque and tartar build-up"
    ],
    description: "Switch to the goodness of Ayurveda for your dental health. Our Red Herbal Paste uses time-tested ingredients to provide comprehensive protection for your teeth and gums, ensuring a healthy and confident smile."
  },
  { id: 84, name: "Elements Wellness Fresh O Guard Toothpaste 120 Gms", price: 201, image: "assets/images/img83.png", productCode: "IS13183",
    benefits: [
      "Advanced protection for healthy teeth and gums",
      "Refreshing mint flavor for all-day freshness",
      "Helps prevent tooth decay and gum disease",
      "Removes surface stains for a brighter smile",
      "Gentle and effective for daily oral hygiene"
    ],
    description: "Keep your mouth fresh and protected with Fresh O Guard. This specialized toothpaste provides a defensive shield against common dental issues while giving you a burst of cooling freshness that lasts for hours."
  },
  { id: 85, name: "Elements Wellness Ayuheel", price: 226, image: "assets/images/img84.png", productCode: "IS15132",
    benefits: [
      "Intensive repair for cracked and dry heels",
      "Softens tough and rough skin effectively",
      "Provides soothing relief from heel pain",
      "Prevents future cracking with regular use",
      "Fast-absorbing formula with Ayurvedic oils"
    ],
    description: "Heal your heels naturally with Ayuheel. This specialized cream penetrates deep into rough skin to provide intensive moisture and repair, leaving your feet soft, smooth, and comfortable."
  },
  { id: 86, name: "Elements Wellness Pro Nasika 20 ml", price: 226, image: "assets/images/img85.png", productCode: "IS15133",
    benefits: [
      "Ayurvedic nasal drops for respiratory wellness",
      "Clears nasal passages and eases breathing",
      "Helps protect against seasonal allergens",
      "Traditional 'Nasya' oil for mental clarity",
      "Safe and non-addictive herbal formula"
    ],
    description: "Support your respiratory and mental health with Pro Nasika. Based on the ancient practice of Nasya, these herbal drops help maintain clear nasal passages and promote a sense of overall well-being."
  },
  { id: 87, name: "Elements Wellness Eyenergy 10 ml", price: 195, image: "assets/images/img86.png", productCode: "IS15134",
    benefits: [
      "Soothing herbal drops for tired and dry eyes",
      "Protects eyes from digital screen strain",
      "Clears dust and pollutants naturally",
      "Promotes overall eye health and vision",
      "Cooling and refreshing sensation on application"
    ],
    description: "Give your eyes the energy and care they need in the digital age. Eyenergy provides a soothing and protective layer for your eyes, helping to reduce strain and keep your vision clear and healthy."
  },
  { id: 88, name: "On&on Herbal Tooth Paste With Herbal Extracts 150 Gms", price: 172, image: "assets/images/img87.png", productCode: "IS15004",
    benefits: [
      "Enriched with 10+ potent herbal extracts",
      "Natural protection against tooth decay",
      "Strengthens gums and reduces sensitivity",
      "Provides a clean and fresh mouth feel",
      "Free from harsh chemicals and artificial agents"
    ],
    description: "Experience the complete protection of herbs for your teeth. Our herbal toothpaste combines the power of nature to provide a deep clean and ensure your oral hygiene is maintained the Ayurvedic way."
  },
  { id: 89, name: "Neustar Nu Femme Perfume For Women 100 ml", price: 1100, image: "assets/images/img88.png", productCode: "IS11641",
    benefits: [
      "Long-lasting and elegant floral fragrance",
      "Perfect for both daily wear and special occasions",
      "Premium quality perfume with a sophisticated scent",
      "Boosts confidence and leaves a lasting impression",
      "Beautifully designed bottle for your dresser"
    ],
    description: "Embrace your femininity with Nu Femme. This premium perfume provides a captivating and long-lasting aroma that perfectly complements your elegance and style, ensuring you feel confident all day long."
  },
  { id: 90, name: "Neustar Tyzon Perfume For Men 100 ml", price: 1100, image: "assets/images/img89.png", productCode: "IS11642",
    benefits: [
      "Bold and masculine fragrance for the modern man",
      "Highly concentrated for long-lasting effect",
      "Sophisticated notes for professional and social use",
      "Enhances your personality and presence",
      "Elegant and sleek bottle design"
    ],
    description: "Define your style with Tyzon. This high-performance perfume for men provides a strong and sophisticated fragrance that lasts for hours, making it the perfect choice for the man who wants to stand out."
  },
  { id: 91, name: "Neustar Nu Femme Deo For Women 200 ml", price: 231, image: "assets/images/img90.png", productCode: "IS11643",
    benefits: [
      "Provides effective protection against body odor",
      "Fresh and floral scent for all-day confidence",
      "Gentle on the skin and non-irritating",
      "Perfect for active and busy lifestyles",
      "Quick-drying formula that leaves no stains"
    ],
    description: "Stay fresh and fragrant all day with Nu Femme Deodorant. Its effective formula keeps body odor away while surrounding you with a delightful scent that keeps you feeling energized and confident."
  },
  { id: 92, name: "Neustar Tyzon Deo For Men 200 ml", price: 231, image: "assets/images/img91.png", productCode: "IS11644",
    benefits: [
      "Strong and refreshing protection against sweat",
      "Keeps you smelling great even after a long day",
      "Skin-friendly formula that's safe for daily use",
      "Boosts confidence with a masculine aroma",
      "Ideal for athletes and active professionals"
    ],
    description: "Take on the day with confidence. Tyzon Deodorant provides powerful protection against body odor and a refreshing scent that keeps you feeling at your best, no matter how busy your schedule gets."
  },
  { id: 93, name: "Neustar Tulsi & Mint Tooth Paste 100 Gms", price: 67, image: "assets/images/img92.png", productCode: "IS13541",
    benefits: [
      "Powerful combination of Tulsi and Mint",
      "Provides extreme cooling and fresh breath",
      "Natural antibacterial protection for gums",
      "Helps in keeping teeth sparkling white",
      "Effective against common dental germs"
    ],
    description: "Experience a burst of cooling energy with Tulsi and Mint. This refreshing toothpaste provides a deep clean while ensuring your breath stays fresh and your gums stay protected naturally."
  },
  { id: 94, name: "On & On Sandal Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img93.png", productCode: "IS15101",
    benefits: [
      "Infused with pure Sandalwood oil for skin care",
      "Gives a luxurious and creamy bathing experience",
      "Brightens skin tone and provides a natural glow",
      "Iconic and soothing traditional fragrance",
      "High TFM for a superior quality soap"
    ],
    description: "Transform your bath into a spa experience with our Sandal Luxury bar. Its rich lather and soothing aroma provide the ultimate relaxation while nourishing your skin for a radiant and clear appearance."
  },
  { id: 95, name: "On & On Papaya Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img94.png", productCode: "IS15102",
    benefits: [
      "Contains natural Papaya extracts for brightening",
      "Gently exfoliates dead skin cells during wash",
      "Provides deep moisturization for soft skin",
      "Helps even out skin tone and reduces tan",
      "Fruity and refreshing bathing experience"
    ],
    description: "Unlock the skin-brightening power of Papaya with every bath. This luxury bathing bar cleanses and exfoliates gently, helping to reveal your natural skin radiance while keeping it soft and hydrated."
  },
  { id: 96, name: "On & On Neem Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img95.png", productCode: "IS15103",
    benefits: [
      "Intensive antibacterial protection with Neem",
      "Deeply cleanses and purifies the skin",
      "Helps prevent minor skin infections and acne",
      "Keeps skin healthy, clear, and germ-free",
      "Safe and gentle for the entire family"
    ],
    description: "Protect your skin naturally with our Neem Luxury bar. Its high-quality formula provides a deep, hygienic wash that keeps germs away while ensuring your skin stays healthy and cared for."
  },
  { id: 97, name: "On & On Milk & Strawberry Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img96.png", productCode: "IS15104",
    benefits: [
      "Creamy combination of Milk and Strawberry",
      "Intensely moisturizes and softens the skin",
      "Leaves skin with a delightful sweet aroma",
      "Perfect for maintaining a youthful skin glow",
      "Gentle and nourishing for sensitive skin"
    ],
    description: "Pamper yourself with the richness of milk and the sweetness of strawberries. This luxury bathing bar provides a soft and creamy wash that leaves your skin feeling exceptionally smooth and beautifully fragrant."
  },
  { id: 97, name: "On & On Turmeric Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img97.png", productCode: "IS15105",
      benefits: [
        "Traditional Turmeric for natural skin health",
        "Provides antioxidant protection for skin cells",
        "Brightens skin and helps reduce blemishes",
        "Anti-inflammatory properties for skin comfort",
        "Gives a natural and healthy glow to the body"
      ],
      description: "Experience the timeless benefits of Turmeric. Our luxury bathing bar brings the healing and brightening properties of turmeric to your daily bath, ensuring your skin stays clear, radiant, and healthy."
    }
];

personalCareProducts.forEach(item => {
    products.push({
        id: item.id,
        name: item.name,
        price: item.price,
        category: "personalcare",
        image: item.image,
        productCode: item.productCode,
        code: item.productCode,
        benefits: item.benefits,
        description: item.description,
        isFeatured: item.id >= 50 && item.id <= 53
    });
});

// Dynamically generate 44 Health Care products
const healthCodes = [
{ id: 1, name: "Elements Wellness Fealing 60 Capsules", price: 758, image: "assets/images/img1.png", productCode: "IS13359",
    benefits: [
      "Highly absorbable iron for better hemoglobin levels",
      "Boosts energy and reduces daily tiredness",
      "Gentle on the stomach with no metallic taste",
      "Enriched with Ayurvedic herbs like Mulethi",
      "Helps maintain natural vitality and strength"
    ],
    description: "A premium iron supplement that uses specialized Ferrazone for maximum absorption. It effectively addresses iron deficiency while remaining gentle on your digestive system, helping you stay energetic throughout the day."
},
{ id: 2, name: "Elements Wellness Fealing Liquid 200 ml", price: 371, image: "assets/images/img2.png", productCode: "IS13360",
    benefits: [
      "Fast-acting liquid formula for iron absorption",
      "Perfect for those who find capsules hard to swallow",
      "Supports healthy red blood cell production",
      "Reduces weakness and improves physical stamina",
      "Safe and effective for daily nutritional support"
    ],
    description: "An easily absorbable iron tonic designed to improve your energy levels and overall health. Its liquid form ensures quick action, making it an ideal choice for maintaining healthy hemoglobin levels naturally."
},
{ id: 3, name: "Elements Wellness Below 37 60 Veg Caps", price: 938, image: "assets/images/img3.png", productCode: "IS9664",
    benefits: [
      "Naturally helps manage body temperature",
      "Supports the immune system during seasonal changes",
      "Traditional Ayurvedic herbs for safe recovery",
      "Non-drowsy formula for all-day comfort",
      "Promotes faster recovery from common fevers"
    ],
    description: "A natural solution for maintaining normal body temperature and supporting your immune health. This herbal formula works with your body's defenses to help you recover quickly from seasonal illnesses without side effects."
},
{ id: 4, name: "Elements Wellness Cof Nil Cough Relief Formula 100 ml", price: 200, image: "assets/images/img4.png", productCode: "IS9659",
    benefits: [
      "Effective relief from dry and productive cough",
      "Soothes throat irritation and chest congestion",
      "Purely herbal formula with no alcohol content",
      "Safe for children and non-drowsy for adults",
      "Helps clear respiratory passages naturally"
    ],
    description: "A comprehensive herbal cough syrup that provides quick relief from various respiratory discomforts. It clears congestion and soothes your throat using powerful Ayurvedic extracts, ensuring you breathe freely and feel better fast."
},
{ id: 5, name: "On&on Diabalife 30 Vegetarian Capsules", price: 2578, image: "assets/images/img5.png", productCode: "IS13362",
    benefits: [
      "Helps maintain healthy blood sugar balance",
      "Supports natural insulin function in the body",
      "Protects internal organs from high sugar effects",
      "Boosts metabolic health and overall energy",
      "100% vegetarian and safe for long-term use"
    ],
    description: "A revolutionary metabolic support supplement for sugar management. It combines ancient Ayurvedic wisdom with modern research to provide a balanced approach to maintaining healthy sugar levels and overall wellness."
},
{ id: 6, name: "Elements Wellness Immuno 3 Plus 60 Veg Caps", price: 969, image: "assets/images/img6.png", productCode: "IS13146",
    benefits: [
      "Strengthens the body's natural defense system",
      "High antioxidant content for cell protection",
      "Promotes healthy digestion and nutrient intake",
      "Supports eye and skin health naturally",
      "Daily rejuvenator for all-round protection"
    ],
    description: "Known as a daily rejuvenator, this supplement builds your resistance against common ailments. It uses a potent Triphala-based formula to detoxify your system while enhancing your immune performance every day."
},
{ id: 7, name: "Elements Wellness Daily Detox 60 Veg Caps", price: 928, image: "assets/images/img7.png", productCode: "IS9656",
    benefits: [
      "Natural detox for liver and kidney health",
      "Improves digestion and reduces bloating",
      "Helps clear toxins from the bloodstream",
      "Boosts metabolism and energy levels",
      "Protects against environmental pollutants"
    ],
    description: "Refresh your body with our specialized daily detox formula. It supports your internal organs in filtering out harmful toxins, helping you feel lighter, more energetic, and healthier from the inside out."
},
{ id: 8, name: "Elements Wellness Multi Gard Blood Purifier 200 ml", price: 391, image: "assets/images/img8.png", productCode: "IS9651",
    benefits: [
      "Purifies blood and improves skin clarity",
      "Supports healthy liver and kidney function",
      "Helps manage acne and skin eruptions naturally",
      "Boosts immunity and metabolic health",
      "Herbal formula with Manjistha and Punarnava"
    ],
    description: "A powerful Ayurvedic blood purifier that addresses the root cause of skin and health issues by improving organ metabolism. It cleanses your system of impurities, leading to radiant skin and improved overall vitality."
},
{ id: 9, name: "Elements Wellness Well Hart 60 Veg Caps", price: 747, image: "assets/images/img9.png", productCode: "IS13158",
    benefits: [
      "Supports healthy heart muscle function",
      "Helps maintain balanced lipid profiles",
      "Improves blood circulation in the body",
      "Reduces the impact of daily stress on the heart",
      "Natural formula with Arjuna and Pushkarmool"
    ],
    description: "Prioritize your cardiovascular health with our heart-support formula. Specially designed for modern lifestyles, it strengthens your heart naturally and helps manage cholesterol levels to keep you active and healthy."
},
{ id: 10, name: "Elements Wellness Liv A Gain 60 Veg Caps", price: 928, image: "assets/images/img10.png", productCode: "IS9655",
    benefits: [
      "Enhances liver enzyme secretion and function",
      "Supports recovery from liver-related issues",
      "Improves appetite and digestive health",
      "Protects the liver from toxins and chemicals",
      "Natural formula with Revandchini and Bhringraj"
    ],
    description: "A comprehensive liver care supplement that boosts your metabolism and liver performance. It helps in rejuvenating liver cells and ensuring efficient digestion, making it essential for overall physical wellness."
},
{ id: 11, name: "Elements Wellness Liv A Gain Liquid 200 ml", price: 247, image: "assets/images/img11.png", productCode: "IS9654",
    benefits: [
      "Quick-acting liquid formula for liver support",
      "Aids in better digestion and nutrient absorption",
      "Helps relieve symptoms of a sluggish liver",
      "Supports natural detoxification processes",
      "Refreshing and easy-to-consume herbal tonic"
    ],
    description: "A powerful liver tonic in liquid form for faster results. It works by stimulating healthy liver function and improving appetite, helping your body process nutrients better and stay protected against impurities."
},
{ id: 12, name: "Elements Wellness No Vedana 60 Veg Caps", price: 1185, image: "assets/images/img12.png", productCode: "IS9658",
    benefits: [
      "Natural relief from joint and muscular pain",
      "Reduces inflammation and swelling effectively",
      "Eases stiffness and improves mobility",
      "Safe for long-term use without side effects",
      "Supports overall musculoskeletal health"
    ],
    description: "Say goodbye to body aches with our herbal pain relief capsules. Designed to target the root cause of inflammation, this formula provides long-lasting comfort and helps you regain your active lifestyle naturally."
},
{ id: 13, name: "Elements Wellness Phyt Stress 60 Veg Caps", price: 1051, image: "assets/images/img13.png", productCode: "IS13147",
    benefits: [
      "Helps the body adapt to mental and physical stress",
      "Promotes a calm mind and better sleep quality",
      "Builds overall mental stamina and resilience",
      "Supports the immune system under pressure",
      "Adaptogenic blend with Ashwagandha and Tulsi"
    ],
    description: "Manage the pressures of modern life with this natural stress-relief supplement. It works by balancing your body's response to stress, helping you stay calm, focused, and energetic throughout the day."
},
{ id: 14, name: "Elements Wellness Uri Flush 3 Plus Tablets 60 Tabs", price: 1134, image: "assets/images/img14.png", productCode: "IS9663",
    benefits: [
      "Supports urinary tract health and function",
      "Helps in the natural management of kidney stones",
      "Reduces inflammation and burning sensation",
      "Acts as a safe and natural diuretic",
      "Formulated with Gokhru and Punarnava"
    ],
    description: "A specialized formula for urinary wellness that helps maintain a healthy system. It works by supporting the kidneys and preventing the formation of stones, ensuring smooth and comfortable urinary function."
},
{ id: 15, name: "Elements Wellness Uri Flush 3 Liquid 200 ml", price: 489, image: "assets/images/img15.png", productCode: "IS9662",
    benefits: [
      "Fast-acting liquid support for urinary health",
      "Helps flush out impurities from the kidneys",
      "Relieves discomfort during urination",
      "Maintains healthy fluid balance in the body",
      "Ideal for quick relief and system cleansing"
    ],
    description: "A potent liquid tonic designed to cleanse and support your urinary system. Its herbal composition helps in flushing the kidneys and maintaining a healthy tract, providing quick relief from common urinary issues."
},
{ id: 16, name: "Elements Wellness Woman Companion 200 ml", price: 350, image: "assets/images/img16.png", productCode: "IS9652",
    benefits: [
      "Regulates hormonal balance naturally",
      "Supports smooth and regular menstrual cycles",
      "Reduces cycle-related pain and mood swings",
      "Improves overall iron levels and energy",
      "Comprehensive tonic for long-term female health"
    ],
    description: "A dedicated health tonic for women designed to support reproductive and overall wellness. It helps manage hormonal fluctuations and promotes natural balance, ensuring you feel strong and comfortable throughout the month."
},
{ id: 17, name: "Elements Wellness Cyclova 30 Capsules", price: 2062, image: "assets/images/img17.png", productCode: "IS13956",
    benefits: [
      "Specialized support for managing PCOS symptoms",
      "Helps normalize ovarian and hormonal function",
      "Supports healthy metabolism and weight balance",
      "Natural formula with Kanchanara and Guggul",
      "Promotes regular cycles and reproductive health"
    ],
    description: "An advanced Ayurvedic solution for managing hormonal imbalances like PCOS. It works at a cellular level to support ovarian health and metabolic function, helping women regain their natural health rhythm safely."
},
{ id: 18, name: "Elements Wellness Privy Wash 100 ml", price: 363, image: "assets/images/img18.png", productCode: "IS13379",
    benefits: [
      "Maintains natural pH balance of intimate areas",
      "Provides gentle cleansing without irritation",
      "Protects against dryness, itching, and odor",
      "Free from harsh sulfates and parabens",
      "Ensures all-day freshness and hygiene"
    ],
    description: "A specialized, soap-free wash designed for women's intimate hygiene. It provides gentle yet effective protection against common issues like dryness and infection while maintaining your body's natural defensive balance."
},
{ id: 19, name: "Elements Wellness Man Shakti Man 60 Veg Caps", price: 1289, image: "assets/images/img19.png", productCode: "IS9661",
    benefits: [
      "Supports natural vitality and physical stamina",
      "Improves libido and sexual wellness in men",
      "Helps manage stress and performance anxiety",
      "Enhances overall strength and energy levels",
      "Traditional herbs for safe and effective support"
    ],
    description: "A powerful health supplement for men designed to improve vitality and physical performance. It uses potent Ayurvedic herbs to boost microcirculation and reduce stress, helping you maintain peak health and confidence."
},
{ id: 20, name: "Elements Wellness Antilergy Liquid 200 ml", price: 360, image: "assets/images/img20.png", productCode: "IS13957",
    benefits: [
      "Effectively manages skin and food allergies",
      "Reduces itching, rashes, and skin irritation",
      "Helps the body build resistance to allergens",
      "Purifies the system of allergy-causing toxins",
      "Safe herbal liquid with no drowsiness"
    ],
    description: "Don't let allergies hold you back. Our specialized herbal liquid addresses the root cause of allergic reactions by purifying your blood and calming skin irritation, helping you live comfortably and sneeze-free."
},
{ id: 21, name: "Elements Wellness Thyhealth Liquid 200 ml", price: 721, image: "assets/images/img21.png", productCode: "IS13958",
    benefits: [
      "Supports healthy thyroid and metabolic function",
      "Helps manage energy levels and fatigue",
      "Promotes natural hormonal balance",
      "Contains potent herbs like Kanchanar Guggulu",
      "Safe and natural support for long-term health"
    ],
    description: "A dedicated supplement for supporting thyroid wellness. It works by providing the nutrients your body needs to maintain healthy metabolic rates and hormonal levels, helping you feel more active and balanced every day."
},
{ id: 22, name: "Elements Wellness Ayushwaas Avaleha 250 Gms", price: 1340, image: "assets/images/img22.png", productCode: "IS13959",
    benefits: [
      "Comprehensive support for respiratory health",
      "Helps clear phlegm and eases breathing",
      "Strengthens lung tissues against pollutants",
      "Reduces allergic reactions in the airways",
      "Nutritious Ayurvedic jam for daily immunity"
    ],
    description: "Breathe easier with our traditional Ayushwaas Avaleha. This nutrient-rich Ayurvedic jam is designed to strengthen your lungs and clear respiratory passages, making it ideal for those living in polluted environments or managing seasonal chest issues."
},
{ id: 23, name: "Elements Wellness No Vedana Gel 50 Gms", price: 299, image: "assets/images/img23.png", productCode: "IS9657",
    benefits: [
      "Rapid relief from muscular and joint pain",
      "Increases blood flow to the affected area",
      "Reduces inflammation and swelling quickly",
      "Non-greasy formula that absorbs easily",
      "Ideal for athletes and senior citizens"
    ],
    description: "A fast-acting Ayurvedic pain relief gel that provides targeted comfort for muscle and joint aches. Its specialized formula penetrates deep to reduce inflammation and stiffness, helping you move freely again."
},
{ id: 24, name: "Elements Wellness Wound Healing Cream 25 Gms", price: 200, image: "assets/images/img24.png", productCode: "IS13229",
    benefits: [
      "Accelerates natural healing of minor cuts and wounds",
      "Effective antimicrobial protection against infections",
      "Promotes healthy skin regeneration",
      "Safe for individuals with diabetes",
      "Soothes inflammation and prevents scarring"
    ],
    description: "A specialized cream for treating minor skin injuries, cuts, and bruises. It works by stimulating natural cell growth and providing a protective barrier against germs, ensuring a clean and speedy recovery."
},
{ id: 25, name: "Elements Wellness Champi Champion Taila 200 ml", price: 540, image: "assets/images/img25.png", productCode: "IS9665",
    benefits: [
      "Rejuvenates the body and improves circulation",
      "Relieves muscular tension and body stiffness",
      "Promotes deep relaxation and better sleep",
      "Nourishes hair and scalp for better growth",
      "Made using traditional Taila Pak Vidhi process"
    ],
    description: "Experience the ultimate relaxation with our therapeutic massage oil. Infused with potent herbs, it revitalizes your body and mind, helping you de-stress while improving your overall physical vitality."
},
{ id: 26, name: "On&on Kavachprash 1 kg", price: 1335, image: "assets/images/img26.png", productCode: "IS13089",
    benefits: [
      "Powerful immunity booster for all age groups",
      "Builds physical stamina and mental alertness",
      "Supports healthy digestion and metabolism",
      "Protects against common seasonal illnesses",
      "Enriched with 28+ Ayurvedic herbs and Amla"
    ],
    description: "A modern take on traditional Chyawanprash, this potent health supplement acts as a shield for your body. It strengthens your immune system and provides the energy you need to tackle today's environmental challenges."
},
{ id: 27, name: "On&on Nutrilife Vanilla Flavour Powder 750 Gms", price: 2349, image: "assets/images/img27.png", productCode: "IS8826",
    benefits: [
      "Complete nutritional support for the entire family",
      "High-quality protein for muscle and tissue repair",
      "Essential vitamins and minerals for daily health",
      "Boosts energy levels and physical endurance",
      "Delicious vanilla flavor that mixes easily"
    ],
    description: "A premium nutritional supplement that provides a balanced blend of macronutrients and micronutrients. It's designed to fill the gaps in your daily diet, ensuring you stay energetic and healthy throughout the day."
},
{ id: 28, name: "Elements Wellness Protein Powder 500 Gms", price: 2887, image: "assets/images/img28.png", productCode: "IS13148",
    benefits: [
      "Triple protein source for maximum effectiveness",
      "Supports muscle growth and body repair",
      "Easily digestible with high bioavailability",
      "Provides sustained energy for active lifestyles",
      "Low fat and sugar for better weight management"
    ],
    description: "Achieve your fitness goals with our high-quality protein powder. It combines Soy, Whey, and Pea proteins to provide a complete amino acid profile, supporting muscle recovery and overall strength for a healthier body."
},
{ id: 29, name: "Elements Wellness Natcium 60caplets", price: 1223, image: "assets/images/img29.png", productCode: "IS13153",
    benefits: [
      "Natural calcium source for stronger bones",
      "Supports healthy joint and teeth function",
      "Improves calcium absorption in the body",
      "Essential for maintaining skeletal density",
      "Safe and non-constipating herbal formula"
    ],
    description: "Keep your bones strong and healthy with Natcium. This specialized calcium supplement uses natural sources to ensure your body gets the support it needs to maintain bone density and overall structural health."
},
{ id: 30, name: "On&on Nutrilife Chocolate Flavour Powder 750 Gms", price: 2349, image: "assets/images/img30.png", productCode: "IS8827",
    benefits: [
      "Rich chocolate flavor loved by all ages",
      "Provides a balanced ratio of proteins and carbs",
      "Supports growth and development in children",
      "Boosts daily energy and stamina",
      "Packed with essential micro-nutrients"
    ],
    description: "Make nutrition delicious with our chocolate-flavored health drink. It provides a comprehensive range of nutrients that help maintain energy levels and support the overall growth and wellness of your family."
},
{ id: 31, name: "On & On Nu Woman Sanitary Napkins", price: 357, image: "assets/images/img31.png", productCode: "IS11631",
    benefits: [
      "Advanced anion strip for antibacterial protection",
      "Superior absorption to keep you dry and comfortable",
      "Breathable material that prevents skin irritation",
      "Ultra-thin design for maximum discretion",
      "Side guards to prevent any leakage"
    ],
    description: "Experience premium hygiene and comfort during your period. These ultra-thin napkins provide exceptional absorption and protection, allowing you to stay active and confident all day long."
},
{ id: 32, name: "On&on 9e5 Natural Antioxidant 30 Sachets", price: 3815, image: "assets/images/img32.png", productCode: "IS2453",
    benefits: [
      "Extremely high antioxidant power (9 lakh ORAC)",
      "Blend of 13 super berries for total protection",
      "Supports deep detoxification and organ health",
      "Boosts immune system and energy levels",
      "Helps combat the effects of oxidative stress"
    ],
    description: "A premium health drink concentrate that offers total-body rejuvenation. Packed with the goodness of exotic berries, it helps neutralize free radicals and strengthens your natural defenses for a long, healthy life."
},
{ id: 33, name: "On&on Morolife", price: 2936, image: "assets/images/img33.png", productCode: "IS13166",
    benefits: [
      "Supports healthy metabolism and weight control",
      "Natural source of essential vitamins and minerals",
      "Boosts daily energy and mental alertness",
      "Helps the body process nutrients efficiently",
      "Promotes long-term vitality and wellness"
    ],
    description: "Boost your metabolic health with Morolife. This comprehensive wellness supplement provides vital nutrients that help your body function at its best, ensuring you have the energy and health to enjoy life to the fullest."
},
{ id: 34, name: "On & On Spirulina Gold 60 Vegetarian Capsules", price: 1468, image: "assets/images/img34.png", productCode: "IS11654",
    benefits: [
      "Nutrient-dense superfood for daily energy",
      "High protein and vitamin content for vitality",
      "Enhanced with citrus bioflavonoids for absorption",
      "Supports strong immunity and blood health",
      "100% vegetarian and natural source of nutrition"
    ],
    description: "Known as the world's best superfood, Spirulina Gold provides almost all the nutrients your body needs. It’s an ideal supplement for boosting stamina and ensuring your body stays protected and nourished every day."
},
{ id: 35, name: "On & On Moringa 60 Capsules", price: 702, image: "assets/images/img35.png", productCode: "IS13167",
    benefits: [
      "Natural powerhouse of Vitamin C and Calcium",
      "Anti-inflammatory support for joints and skin",
      "Improves digestive health and metabolism",
      "Rich in essential amino acids and iron",
      "Supports healthy vision and immune function"
    ],
    description: "Unlock the benefits of the 'Miracle Tree' with our Moringa capsules. This incredibly nutrient-rich supplement helps reduce inflammation, boosts your immunity, and provides a natural energy lift for your entire body."
},
{ id: 36, name: "On & On Vitamin C 90 Chewable Tablets", price: 622, image: "assets/images/img36.png", productCode: "IS13168",
    benefits: [
      "Powerful immune support in a tasty tablet",
      "Promotes healthy skin and collagen production",
      "Potent antioxidant to fight oxidative stress",
      "Helps in better absorption of iron",
      "Easy-to-consume chewable format"
    ],
    description: "Boost your immunity naturally with our Vitamin C chewable tablets. They provide essential antioxidant protection for your cells and help maintain healthy skin and tissues, making them a must-have for daily wellness."
},
{ id: 37, name: "Elements Wellness Herbal Antacid 3x10 Chewable Tablets", price: 515, image: "assets/images/img37.png", productCode: "IS13155",
    benefits: [
      "Instant relief from acidity and heartburn",
      "Helps regulate natural acid production",
      "Reduces bloating, gas, and stomach heaviness",
      "Safe herbal formula with no side effects",
      "Improves overall digestive comfort"
    ],
    description: "Get quick and lasting relief from stomach discomfort with our herbal antacid tablets. They work by neutralizing excess acid and supporting healthy digestion, allowing you to enjoy your meals without worry."
},
{ id: 38, name: "Elements Wellness Ayuvir Drops 30 ml", price: 300, image: "assets/images/img38.png", productCode: "IS13157",
    benefits: [
      "Gentle digestive support for infants and kids",
      "Relieves gas, colic, and stomach discomfort",
      "Improves appetite and nutrient absorption",
      "Supports healthy liver function in children",
      "Safe herbal formula with 15 potent herbs"
    ],
    description: "Specially formulated for the delicate systems of children, Ayuvir Drops provide safe and natural relief from digestive issues. They help improve your child's appetite and keep their digestive system healthy and balanced."
},
{ id: 39, name: "Elements Wellness Full & Easy 10 Sachets", price: 675, image: "assets/images/img39.png", productCode: "IS13165",
    benefits: [
      "Natural fiber support for easy bowel movements",
      "Relieves constipation and stomach hardness",
      "Cleanses the digestive tract effectively",
      "Supports healthy gut bacteria balance",
      "Gentle formula with Isabgol and Triphala"
    ],
    description: "Say goodbye to digestive irregularities with Full & Easy. This natural fiber supplement ensures smooth and regular bowel movements, helping you feel light and comfortable throughout the day."
},
{ id: 40, name: "Elements Wellness Piles CC Cream 30g", price: 318, image: "assets/images/img40.png", productCode: "IS13163",
    benefits: [
      "Soothing relief from pain and inflammation",
      "Reduces swelling and discomfort quickly",
      "Antimicrobial action for better healing",
      "Safe and non-irritating herbal formula",
      "Easy application for targeted relief"
    ],
    description: "Get fast-acting relief from the discomfort associated with piles. This specialized herbal cream provides a cooling effect and reduces inflammation, helping you manage symptoms effectively and comfortably."
},
{ id: 41, name: "Elements Wellness Piles CC 60 Tablets", price: 632, image: "assets/images/img41.png", productCode: "IS13160",
    benefits: [
      "Addresses the root cause of piles naturally",
      "Reduces bleeding, pain, and swelling",
      "Improves digestion and regulates bowels",
      "Safe for long-term management",
      "Formulated with 13 potent Ayurvedic extracts"
    ],
    description: "A comprehensive Ayurvedic approach to managing piles. These tablets work internally to reduce inflammation and improve digestive health, providing sustainable relief and helping prevent future discomfort."
},
{ id: 42, name: "Elements Wellness Nervenergy 60 Tablets", price: 903, image: "assets/images/img42.png", productCode: "IS13162",
    benefits: [
      "Supports healthy nerve function and energy",
      "Reduces numbness and neuropathic discomfort",
      "Boosts cognitive function and mental clarity",
      "Supports muscular health and coordination",
      "Essential vitamins and minerals for nerves"
    ],
    description: "Energize your nervous system with Nervenergy. This specialized supplement provides essential nutrients that support nerve health and help reduce daily discomfort, keeping your mind and body perfectly in sync."
},
{ id: 43, name: "On&on Herbal Roll On Inhaler", price: 180, image: "assets/images/img43.png", productCode: "IS15004",
    benefits: [
      "Instant relief from headache and nasal congestion",
      "Portable and easy-to-use roll-on design",
      "Non-staining formula with a fresh aroma",
      "Purely herbal with no harsh chemicals",
      "Great for travel and daily seasonal relief"
    ],
    description: "Keep comfort in your pocket with our herbal roll-on. It provides quick relief from cold symptoms and headaches using natural vapors, ensuring you stay active and clear-headed wherever you go."
},
{ id: 44, name: "Elements Wellness Probiotic G Plus 30 Capsules", price: 734, image: "assets/images/img44.png", productCode: "IS13953",
    benefits: [
      "Restores healthy balance of gut bacteria",
      "Improves digestion and reduces gas/bloating",
      "Boosts immunity through better gut health",
      "Useful during and after antibiotic courses",
      "Specialized probiotics with Guduchi support"
    ],
    description: "Support your second brain with Probiotic G Plus. This advanced formula combines beneficial bacteria with Ayurvedic herbs to ensure your digestive system stays healthy, strong, and balanced."
},
];

for (let i = 1; i <= 44; i++) {
    const info = healthCodes[i - 1];
    products.push({
        id: info.id,
        name: info.name,
        price: info.price,
        category: "healthcare",
        image: info.image,
        productCode: info.productCode,
        code: info.productCode,
        description: info.description,
        benefits: info.benefits,
        isFeatured: i <= 4
    });
}

// Agro Care Products (IDs 98-106)
const agroCareProducts = [
    { id: 98, name: "Indiagro Bhuastra Super 2kg", price: 1512, image: "assets/images/img98.png", productCode: "IS15337",
        benefits: [
            "Improves soil health and structure significantly",
            "Enhances water retention capacity of the soil",
            "Supports strong root development and growth",
            "Increases soil fertility for better crop yield",
            "Safe for beneficial soil microorganisms"
        ],
        description: "Bhuastra Super is a premium soil health enhancer designed to provide a strong foundation for your crops. It works by improving the biological and physical properties of the soil, ensuring your plants have the best environment to thrive."
    },
    { id: 99, name: "Indiagro Mi Spray Plus 100ml", price: 550, image: "assets/images/img99.png", productCode: "IS15331",
        benefits: [
            "Acts as a powerful sticker and spreader",
            "Improves the efficacy of sprays and fertilizers",
            "Ensures uniform coverage on leaf surfaces",
            "Helps sprays stay on crops even after rain",
            "Reduces the quantity of spray needed"
        ],
        description: "Mi Spray Plus is an essential agricultural adjuvant that helps you get the most out of your crop sprays. It ensures that fertilizers and pesticides stick to the plants and penetrate deeper, providing better protection and nutrition."
    },
    { id: 100, name: "Indiagro Growmagic Advance 100gms", price: 1815, image: "assets/images/img100.png", productCode: "IS15339",
        benefits: [
            "Boosts plant growth and overall development",
            "Increases the number of flowers and fruits",
            "Improves nutrient uptake from the soil",
            "Helps plants withstand environmental stress",
            "Enhances the quality and color of the harvest"
        ],
        description: "Growmagic Advance is a specialized plant growth promoter that helps unlock the full potential of your crops. It provides the necessary stimulus for faster growth and better yields, ensuring a high-quality harvest for farmers."
    },
    { id: 101, name: "Indiagro Mi Proud 250ml", price: 1320, image: "assets/images/img101.png", productCode: "IS15334",
        benefits: [
            "Effective protection against fungal diseases",
            "Strengthens the plant's natural defense system",
            "Supports healthy leaf and stem growth",
            "Safe and eco-friendly agricultural solution",
            "Improves the overall lifespan of the crop"
        ],
        description: "Protect your crops from common fungal issues with Mi Proud. This specialized formula builds internal resistance in plants, ensuring they stay healthy and productive throughout their growth cycle."
    },
    { id: 102, name: "Indiagro Mi Citra 250ml", price: 2062, image: "assets/images/img102.png", productCode: "IS15336",
        benefits: [
            "Natural solution for pest management",
            "Effectively controls sucking pests and insects",
            "Safe for crops and beneficial insects",
            "Leaves no harmful residues on the produce",
            "Easy to mix and apply with regular sprays"
        ],
        description: "Mi Citra provides a natural and effective way to manage pests in your farm. Its unique composition targets harmful insects while remaining safe for the environment, helping you maintain a healthy and pest-free crop."
    },
    { id: 103, name: "Indiagro Mi Veer 250ml", price: 2915, image: "assets/images/img103.png", productCode: "IS15335",
        benefits: [
            "Boosts plant immunity and stress tolerance",
            "Supports recovery from pest and disease attacks",
            "Enhances photosynthesis and greenness of leaves",
            "Promotes uniform growth across the field",
            "Safe for all types of seasonal and perennial crops"
        ],
        description: "Strengthen your plants with Mi Veer. This immunity booster helps your crops recover quickly from various stresses and ensures they remain vibrant and productive, leading to a more consistent and healthy yield."
    },
    { id: 104, name: "Indiagro Modiphy 250 ml", price: 550, image: "assets/images/img104.png", productCode: "IS15338",
        benefits: [
            "Optimizes the pH of spray water for better results",
            "Prevents the breakdown of active spray ingredients",
            "Improves the solubility of fertilizers and pesticides",
            "Ensures a more stable and effective spray mix",
            "Essential for hard water conditions"
        ],
        description: "Modiphy is a specialized water conditioner that ensures your agricultural sprays work at their peak efficiency. By optimizing the water quality, it prevents the loss of expensive spray components and ensures total crop protection."
    },
    { id: 105, name: "Indiagro Y Ras Plus 250 ml", price: 1045, image: "assets/images/img105.png", productCode: "IS15332",
        benefits: [
            "Supports healthy flowering and fruit setting",
            "Reduces flower and fruit drop significantly",
            "Improves the size and weight of the produce",
            "Enhances the nutritional value of the harvest",
            "Increases the market value of the crop"
        ],
        description: "Maximize your farm's output with Y Ras Plus. This specialized supplement focuses on the reproductive health of plants, ensuring more flowers turn into healthy fruits and leading to a significant increase in your total yield."
    },
    { id: 106, name: "Indiagro Olif Super 16 500 ml", price: 1430, image: "assets/images/img106.png", productCode: "IS15333",
        benefits: [
            "Comprehensive multi-micronutrient supplement",
            "Corrects nutrient deficiencies in the soil",
            "Supports overall metabolic health of plants",
            "Improves resistance against climate changes",
            "Essential for high-yielding crop varieties"
        ],
        description: "Give your crops the complete nutrition they need with Olif Super 16. Packed with 16 essential nutrients, it ensures that your plants never face a deficiency, resulting in robust growth and a bountiful harvest."
    }
];

agroCareProducts.forEach(item => {
    products.push({
        ...item,
        category: "agrocare",
        code: item.productCode,
        description: item.description,
        benefits: item.benefits,
        isFeatured: false
    });
});

// Food and Beverages Products (IDs 107-113)
const foodAndBeveragesProducts = [
    { id: 107, name: "On & On Masala Kawah", price: 209, image: "assets/images/img107.png", productCode: "IS15082",
        benefits: [
            "Traditional blend of herbs and spices",
            "Natural antioxidant support for the body",
            "Aids in healthy digestion and metabolism",
            "Refreshing drink to boost daily immunity",
            "Great alternative to regular tea or coffee"
        ],
        description: "Enjoy the authentic taste of Masala Kawah. This herbal blend is designed to provide a refreshing experience while supporting your body's natural defenses and digestive health with every sip."
    },
    { id: 108, name: "On & On Kashmiri Kawah", price: 371, image: "assets/images/img108.png", productCode: "IS15245",
        benefits: [
            "Authentic Kashmiri green tea with saffron",
            "Rich in powerful antioxidants and minerals",
            "Promotes relaxation and reduces stress",
            "Helps maintain a healthy and glowing skin",
            "Warm and soothing aroma for better sleep"
        ],
        description: "Experience the luxury of the valleys with our Kashmiri Kawah. Infused with exotic spices and saffron, it provides a soothing and healthy drink that rejuvenates your senses and promotes overall well-being."
    },
    { id: 109, name: "Aahar Tealite 500 Gms", price: 420, image: "assets/images/img109.png", productCode: "IS13697",
        benefits: [
            "Premium quality blend of handpicked tea leaves",
            "Provides a rich and energizing tea experience",
            "Natural source of polyphenols and antioxidants",
            "Perfect color and strong aroma in every cup",
            "Ideal for a refreshing morning start"
        ],
        description: "Elevate your daily tea break with Aahar Tealite Gold. Our premium blend ensures you get a balance of strength and flavor, helping you stay active and refreshed throughout the day."
    },
    { id: 110, name: "Aahar Himalayan Pink Salt (1kg)", price: 120, image: "assets/images/img110.png", productCode: "IS15083",
        benefits: [
            "100% natural and unrefined mineral-rich salt",
            "Contains 84+ essential trace minerals",
            "Helps maintain healthy electrolyte balance",
            "Better alternative to processed table salt",
            "Enhances the natural flavor of all your dishes"
        ],
        description: "Switch to a healthier alternative with our Himalayan Pink Salt. Harvested from ancient deposits, it provides your body with essential minerals and adds a subtle, gourmet flavor to your everyday meals."
    },
    { id: 111, name: "Aahar Chilli Powder (500g)", price: 370, image: "assets/images/img111.png", productCode: "IS15243",
        benefits: [
            "Pure and unadulterated high-quality chilli",
            "Provides natural color and balanced heat",
            "Processed at low temperatures to retain oils",
            "Free from artificial colors and preservatives",
            "Essential for authentic Indian spicy flavors"
        ],
        description: "Add a spicy kick to your cooking with our pure Chilli Powder. Made from carefully selected peppers, it ensures you get the perfect heat and vibrant color without any harmful additives."
    },
    { id: 112, name: "Aahar Turmeric Powder (500g)", price: 265, image: "assets/images/img112.png", productCode: "IS15241",
        benefits: [
            "High curcumin content for maximum health",
            "Natural anti-inflammatory and antiseptic properties",
            "Adds a rich golden color to your curries",
            "Pure and free from any chemical fillers",
            "Essential spice for immunity and wellness"
        ],
        description: "Experience the healing power of pure turmeric. Our Aahar Turmeric Powder is processed with care to maintain its natural medicinal properties, providing you with health and flavor in every pinch."
    },
    { id: 113, name: "Aahar Coriander Powder (500g)", price: 245, image: "assets/images/img113.png", productCode: "IS15242",
        benefits: [
            "Freshly ground for maximum aroma and taste",
            "Supports healthy digestion and gut health",
            "Adds a sweet and savory flavor to dishes",
            "100% pure with no added starch or fillers",
            "Versatile spice for a wide variety of cuisines"
        ],
        description: "Enhance the aroma of your kitchen with our pure Coriander Powder. Its fine texture and earthy flavor make it a perfect addition to your spice box, supporting both your taste buds and your health."
    }
];

foodAndBeveragesProducts.forEach(item => {
    products.push({
        ...item,
        category: "foodandbeverages",
        code: item.productCode,
        description: item.description,
        benefits: item.benefits,
        isFeatured: false
    });
});

