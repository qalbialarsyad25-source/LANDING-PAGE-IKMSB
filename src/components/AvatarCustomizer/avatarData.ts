export interface AvatarState {
  name: string;
  gender: "male" | "female";
  skinToneId: string;
  expressionId: string;
  hairHeadwearId: string;
  outfitId: string;
  sashId: string;
  accessoryId: string;
  backgroundId: string;
  windEffect: boolean;
  outfitColorAccent: string;
}

export const SKIN_TONES = [
  { id: "skin-1", name: "Kuning Langsat", color: "#f8d5b2", shadow: "#e2b892" },
  { id: "skin-2", name: "Sawo Matang", color: "#dfa375", shadow: "#c5895c" },
  { id: "skin-3", name: "Eksotis Nusantara", color: "#be8353", shadow: "#a56e40" },
  { id: "skin-4", name: "Cokelat Hangat", color: "#8d5830", shadow: "#744421" },
];

export const MALE_HEADWEAR = [
  {
    id: "passapu-zamrud",
    name: "Passapu Hijau Zamrud",
    desc: "Ikat kepala kehormatan pria pegunungan Mamasa dengan motif Passura emas.",
    lore: "Passapu melambangkan keteguhan iman, martabat, dan kesiapan seorang pemimpin melindungi warganya.",
  },
  {
    id: "passapu-emas",
    name: "Passapu Emas Seremonial",
    desc: "Ikat kepala lipat tanduk kerbau berhias benang emas untuk tetua adat.",
    lore: "Bentuk lipatan menyerupai tanduk kerbau (Pa'tedong), simbol kepemimpinan tertinggi dalam musyawarah adat.",
  },
  {
    id: "passapu-marun",
    name: "Passapu Tenun Sambur",
    desc: "Ikat kepala merah marun bumi khas tenun ikat kuno Mamasa.",
    lore: "Warna merah tanah pegunungan melambangkan keberanian dan darah ikatan kekerabatan yang suci.",
  },
  {
    id: "rambut-rapi",
    name: "Rambut Tradisional Rapi",
    desc: "Gaya rambut alami pria muda Mamasa tanpa ikat kepala.",
    lore: "Melambangkan kesederhanaan, keterbukaan hati, dan kerendahan hati seorang pemuda.",
  },
];

export const FEMALE_HEADWEAR = [
  {
    id: "sapi-manik",
    name: "Sa'pi Manik Bunga",
    desc: "Bandana manik-manik tradisional warna-warni khas wanita bangsawan Mamasa.",
    lore: "Sa'pi dirangkai satu demi satu melambangkan ketelitian, kelembutan, dan keindahan budi pekerti wanita Mamasa.",
  },
  {
    id: "sanggul-kandaure",
    name: "Sanggul Hias Kandaure",
    desc: "Tata rambut sanggul agung dengan tusuk konde emas dan rumbai manik.",
    lore: "Dikenakan saat tarian sakral, melambangkan kemurnian jiwa dan penghormatan kepada arwah leluhur.",
  },
  {
    id: "mahkota-lontar",
    name: "Mahkota Daun Emas",
    desc: "Hiasan kepala emas melengkung menyerupai sinar surya.",
    lore: "Simbol Pa'barre Allo, matahari kehidupan yang menerangi sanubari keluarga.",
  },
  {
    id: "rambut-terurai",
    name: "Rambut Terurai Melati",
    desc: "Rambut panjang halus dihiasi kuntum bunga alami pegunungan.",
    lore: "Melambangkan keselarasan hidup dengan alam pegunungan Mamasa yang sejuk dan asri.",
  },
];

export const MALE_OUTFITS = [
  {
    id: "jas-passura-zamrud",
    name: "Jas Tutup Passura Zamrud",
    desc: "Jas adat pria warna hijau rimba tua dengan bordir geometris Mamasa.",
    lore: "Warna hijau zamrud melambangkan kesuburan lembah Mamasa dan kedamaian arwah para leluhur.",
  },
  {
    id: "baju-putih",
    name: "Busana Putih",
    desc: "Pakaian seremonial putih bersih yang dikenakan keluarga saat prosesi.",
    lore: "Warna putih suci melambangkan ketulusan hati membersihkan memori dan memuliakan yang telah tiada.",
  },
  {
    id: "baju-sutra-emas",
    name: "Baju Bella Dada Sutra",
    desc: "Busana pesta adat dari kain sutra tenun berornamen emas mewah.",
    lore: "Mencerminkan keanggunan dan kejayaan peradaban tenun di wilayah Sulawesi Barat.",
  },
  {
    id: "tenun-sambur-merah",
    name: "Tenun Sambur Merah Bumi",
    desc: "Kemeja tenun tebal bertekstur motif kuno Pa'sulan Sangbua.",
    lore: "Kain tenun yang dipintal turun-temurun dari kapas hutan pegunungan Mamasa.",
  },
];

export const FEMALE_OUTFITS = [
  {
    id: "pokko-hijau-zamrud",
    name: "Baju Pokko Hijau Zamrud",
    desc: "Blus tradisional lengan pendek wanita Mamasa bersulam manik emas.",
    lore: "Baju Pokko adalah busana pusaka wanita Mamasa, paduan anggun antara kesopanan dan estetika tinggi.",
  },
  {
    id: "pokko-putih",
    name: "Baju Pokko Putih Suci",
    desc: "Busana putih anggun seremonial ritual.",
    lore: "Dikenakan oleh para ibu dan anak gadis saat mempersembahkan tenun pusaka untuk leluhur tercinta.",
  },
  {
    id: "pokko-merah-marun",
    name: "Baju Pokko Merah Marun",
    desc: "Busana tenun warna merah saga berhias sulaman motif Pa'tedong.",
    lore: "Biasa digunakan dalam tarian penyambutan tamu kehormatan dan pesta syukur Ma'buani.",
  },
  {
    id: "tenun-ikat-kuning",
    name: "Kebaya Tenun Kuning Langsat",
    desc: "Busana tenun halus perpaduan modern dengan motif tenun Sambur tradisional.",
    lore: "Kuning emas melambangkan kemuliaan dan masa depan gemilang anak keturunan Mamasa.",
  },
];

export const SASHES = [
  {
    id: "sash-sambur-zamrud",
    name: "Selempang Sambur Zamrud",
    desc: "Kain selempang motif pa'tedong melintang di dada.",
  },
  {
    id: "sash-merah-sarita",
    name: "Sarita Merah Menjuntai",
    desc: "Kain tenun panjang menjuntai dengan rumbai benang emas.",
  },
  {
    id: "sash-putih-suci",
    name: "Selempang Putih Suci",
    desc: "Kain selempang katun putih khas prosesi.",
  },
  {
    id: "sash-none",
    name: "Tanpa Selempang",
    desc: "Tampilan polos minimalis tanpa kain selempang tambahan.",
  },
];

export const ACCESSORIES = [
  {
    id: "gayang-mamasa",
    name: "Gayang Mamasa (Keris Pusaka)",
    desc: "Senjata pusaka berhulu kayu kemuning bertatahkan perak dan emas.",
    lore: "Gayang bukan sekadar senjata, melainkan simbol penjaga amanah, kehormatan, dan keadilan moral.",
  },
  {
    id: "kalung-kandaure",
    name: "Kalung Manik Kandaure",
    desc: "Rangkaian kalung manik kerucut berhias rumbai manik turun ke dada.",
    lore: "Kalung Kandaure diwariskan turun-temurun sebagai lambang kemakmuran dan berkah keluarga besar.",
  },
  {
    id: "salipi-perak",
    name: "Salipi Perak Adat",
    desc: "Ikat pinggang lempengan perak bertatah ukiran flora Mamasa.",
    lore: "Melambangkan keteguhan prinsip hidup agar tidak mudah terombang-ambing pengaruh luar.",
  },
  {
    id: "daun-suci",
    name: "Dedaunan Suci",
    desc: "Dedaunan aromatik pegunungan yang digunakan dalam ritual pembersihan.",
    lore: "Wangi dedaunan alami melambangkan harumnya nama baik leluhur yang senantiasa dikenang.",
  },
];

export const BACKGROUNDS = [
  {
    id: "bg-lembah",
    name: "Lembah Hijau & Kabut Mamasa",
    gradient: "from-[#e6f4eb] via-[#d4ebd9] to-[#b7dec2]",
    cardColor: "#134e2f",
    description: "Pemandangan sejuk pegunungan Mamasa di pagi hari berselimut kabut.",
  },
  {
    id: "bg-banua",
    name: "Pelataran Banua Sura'",
    gradient: "from-[#f7f3e8] via-[#ede4cc] to-[#dfd1a8]",
    cardColor: "#0d3d24",
    description: "Halaman rumah adat Banua Sura' dengan pilar kayu ulin berukir.",
  },
  {
    id: "bg-angin",
    name: "Pusaran Angin Suci",
    gradient: "from-[#ecf7f3] via-[#d7ece5] to-[#c2e2d6]",
    cardColor: "#093820",
    description: "Semilir angin sakral yang berhembus membawa helai tenun pusaka.",
  },
  {
    id: "bg-senja",
    name: "Senja Gandang Dewata",
    gradient: "from-[#fbebe3] via-[#f7d6c6] to-[#ebbc9c]",
    cardColor: "#3d1f0d",
    description: "Kala senja magis di kaki gunung tertinggi Sulawesi Barat.",
  },
  {
    id: "bg-minimalis",
    name: "Minimalis Putih Zamrud",
    gradient: "from-[#ffffff] via-[#f5fbf7] to-[#eaf4ee]",
    cardColor: "#0d3d24",
    description: "Latar studio modern bersih dengan sentuhan hijau hutan elegan.",
  },
];

export const ACCENT_COLORS = [
  { name: "Hijau Zamrud", hex: "#0d3d24" },
  { name: "Emas Mamasa", hex: "#cfa847" },
  { name: "Putih", hex: "#f8faf9" },
  { name: "Merah Tanah", hex: "#9e3422" },
  { name: "Hitam Damar", hex: "#1c221e" },
];

export const DEFAULT_AVATAR: AvatarState = {
  name: "To Mamasa",
  gender: "male",
  skinToneId: "skin-1",
  expressionId: "smile",
  hairHeadwearId: "passapu-zamrud",
  outfitId: "jas-passura-zamrud",
  sashId: "sash-sambur-zamrud",
  accessoryId: "gayang-mamasa",
  backgroundId: "bg-lembah",
  windEffect: true,
  outfitColorAccent: "#0d3d24",
};
