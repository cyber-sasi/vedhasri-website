const products = [
  { id: 45, name: "Mi Antibacterial Dishwash Round Bar 500 Gms", price: 88, category: "homecare", image: "assets/images/img45.png", description: "Effective antibacterial dishwash bar for sparkling clean utensils.", isFeatured: true },
  { id: 46, name: "Mi Home Kill&shine Powerful Toilet Cleaner 500 ml", price: 110, category: "homecare", image: "assets/images/img46.png", description: "Powerful toilet cleaner for a germ-free and shining toilet.", isFeatured: false },
  { id: 47, name: "Mi Home Disinfectant Floor Cleaner 500 ml", price: 132, category: "homecare", image: "assets/images/img47.png", description: "Disinfectant floor cleaner to keep your home safe and fragrant.", isFeatured: false },
  { id: 48, name: "Mi Home Lemon Fresh Clean&shine Dishwash Liquid 500 ml", price: 165, category: "homecare", image: "assets/images/img48.png", description: "Lemon fresh dishwash liquid that easily cuts through tough grease.", isFeatured: false },
  { id: 49, name: "Mi Home Max Brite Matic Liquid Laundry Detergent 500 ml", price: 242, category: "homecare", image: "assets/images/img49.png", description: "Liquid laundry detergent for deep cleaning and fabric care.", isFeatured: false }
];

const personalCareProducts = [
  { id: 50, name: "Elements Wellness Whitening Body Lotion 100 ml", price: 220, image: "assets/images/img50.png" },
  { id: 51, name: "Elements Wellness Cocoa Butter Body Lotion 200 ml", price: 264, image: "assets/images/img51.png" },
  { id: 52, name: "Elements Wellness Intense Moisturising Body Lotion 200 ml", price: 286, image: "assets/images/img52.png" },
  { id: 53, name: "Elements Wellness Emollient Body Cream 200 ml", price: 286, image: "assets/images/img53.png" },
  { id: 54, name: "Elements Wellness Rose & Glycerine Moisturising Hand Wash 500 ml", price: 440, image: "assets/images/img54.png" },
  { id: 55, name: "Elements Wellness 8 In 1 Hair Conditioner", price: 451, image: "assets/images/img55.png" },
  { id: 56, name: "Elements Wellness Complete Care Shampoo 200 ml", price: 332, image: "assets/images/img56.png" },
  { id: 57, name: "Elements Wellness Anti Dandruff Shampoo 200 ml", price: 332, image: "assets/images/img57.png" },
  { id: 58, name: "Elements Wellness Acti Fresh Shave Gel", price: 274, image: "assets/images/img58.png" },
  { id: 59, name: "Elements Wellness Multi Action Complexion Cream", price: 374, image: "assets/images/img59.png" },
  { id: 60, name: "Elements Wellness Radiant Glow Face Wash Soap Free 100 Gms", price: 258, image: "assets/images/img60.png" },
  { id: 61, name: "Elements Wellness 3 In 1 Face Wash 60 Gms", price: 198, image: "assets/images/img61.png" },
  { id: 62, name: "Elements Wellness Young And Beautiful Under Eye Gel 15 Gms", price: 297, image: "assets/images/img62.png" },
  { id: 63, name: "Neustar Neem & Tulsi Deodorising Soap 100 Gms", price: 48, image: "assets/images/img63.png" },
  { id: 64, name: "Neustar Lime & Aloevera Skin Care Soap 100 Gms", price: 48, image: "assets/images/img64.png" },
  { id: 65, name: "Neustar Rose Fragrant Beauty Soap 100 Gms", price: 48, image: "assets/images/img65.png" },
  { id: 66, name: "Neustar Jasmine & Almond Moisturising Soap 100 Gms", price: 48, image: "assets/images/img66.png" },
  { id: 67, name: "Neustar Anti Bacterial Triple Action Soap 100 Gms", price: 48, image: "assets/images/img67.png" },
  { id: 68, name: "Neustar Sandal Soap With Pro Health 100 Gms", price: 48, image: "assets/images/img68.png" },
  { id: 69, name: "Neustar Perfumed Talc 300 Gms", price: 176, image: "assets/images/img69.png" },
  { id: 70, name: "Neustar Coconut Shampoo & Conditioner Tube 30 ml", price: 34, image: "assets/images/img70.png" },
  { id: 71, name: "Neustar Amla Hair Oil 200 ml", price: 166, image: "assets/images/img71.png" },
  { id: 72, name: "Neustar Papaya Facewash 100 ml", price: 154, image: "assets/images/img72.png" },
  { id: 73, name: "Neustar 100% Pure Esoft Petroleum Jelly 50 Gms", price: 66, image: "assets/images/img73.png" },
  { id: 74, name: "On&on Strawberry Body Butter Cream 100 Gms", price: 330, image: "assets/images/img74.png" },
  { id: 75, name: "Neustar Neem Facewash For Anti Acne 100 ml", price: 154, image: "assets/images/img75.png" },
  { id: 76, name: "Neustar All Natural Blemish Control Walnut Scrub 100 Gms", price: 176, image: "assets/images/img76.png" },
  { id: 77, name: "On&on Maha Bhringraj Herbal Hair Oil 200 ml", price: 430, image: "assets/images/img77.png" },
  { id: 78, name: "Elements Wellness Day Protection Cream", price: 671, image: "assets/images/img78.png" },
  { id: 79, name: "Elements Wellness 12 in 1 Night Repair Cream 25 ml", price: 671, image: "assets/images/img79.png" },
  { id: 80, name: "On & On Hair Colour Shampoo 20 ml", price: 97, image: "assets/images/img80.png" },
  { id: 81, name: "Neustar Tooth Brush Pack Of 4", price: 112, image: "assets/images/img81.png" },
  { id: 82, name: "Elements Wellness Red Herbal Paste 150 Gms", price: 182, image: "assets/images/img82.png" },
  { id: 83, name: "Elements Wellness Fresh O Guard Toothpaste 120 Gms", price: 201, image: "assets/images/img83.png" },
  { id: 84, name: "Elements Wellness Ayuheel", price: 226, image: "assets/images/img84.png" },
  { id: 85, name: "Elements Wellness Pro Nasika 20 ml", price: 226, image: "assets/images/img85.png" },
  { id: 86, name: "Elements Wellness Eyenergy 10 ml", price: 195, image: "assets/images/img86.png" },
  { id: 87, name: "On&on Herbal Tooth Paste With Herbal Extracts 150 Gms", price: 172, image: "assets/images/img87.png" },
  { id: 88, name: "Neustar Nu Femme Perfume For Women 100 ml", price: 1100, image: "assets/images/img88.png" },
  { id: 89, name: "Neustar Tyzon Perfume For Men 100 ml", price: 1100, image: "assets/images/img89.png" },
  { id: 90, name: "Neustar Nu Femme Deo For Women 200 ml", price: 231, image: "assets/images/img90.png" },
  { id: 91, name: "Neustar Tyzon Deo For Men 200 ml", price: 231, image: "assets/images/img91.png" },
  { id: 92, name: "Neustar Tulsi & Mint Tooth Paste 100 Gms", price: 67, image: "assets/images/img92.png" },
  { id: 93, name: "On & On Sandal Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img93.png" },
  { id: 94, name: "On & On Papaya Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img94.png" },
  { id: 95, name: "On & On Neem Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img95.png" },
  { id: 96, name: "On & On Milk & Strawberry Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img96.png" },
  { id: 97, name: "On & On Turmeric Luxury Bathing Bar 75 Gms", price: 96, image: "assets/images/img97.png" }
];

personalCareProducts.forEach(item => {
    products.push({
        id: item.id,
        name: item.name,
        price: item.price,
        category: "personalcare",
        image: item.image,
        description: "Premium personal care product designed for everyday wellness.",
        isFeatured: item.id <= 53 // Optionally feature the first few
    });
});

// Dynamically generate 44 Health Care products
for (let i = 1; i <= 44; i++) {
    let name = `Elements Wellness Health Product ${i}`;
    let price = 450 + (i * 5);
    
    // Specific names requested
    if (i === 1) { name = "Elements Wellness Feeling 60 Capsules"; price = 758; }
    if (i === 2) { name = "Elements Wellness Feeling Liquid 200 ml"; price = 371; }
    if (i === 44) { name = "Elements Wellness Probiotic G Plus 30 Capsules"; price = 734; }

    products.push({
        id: i, // ID 1 to 44
        name: name,
        price: price,
        category: "healthcare",
        image: `assets/images/img${i}.png`,
        description: `Premium Ayurvedic formulation for your complete health care needs. Ensure safety and effectiveness naturally.`,
        isFeatured: i <= 4 // Featured on the homepage
    });
}

