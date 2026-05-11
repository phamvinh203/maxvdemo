export const navItems = [
  {
    label: "GIỚI THIỆU",
    href: "#gioi-thieu",
  },
  {
    label: "SẢN PHẨM",
    href: "#san-pham",
    active: true,
    children: [
      { label: "PHẦN MỀM KẾ TOÁN", href: "#phan-mem-ke-toan" },
      { label: "HỘ KINH DOANH TT88", href: "#ho-kinh-doanh" },
      { label: "CHỮ KÝ SỐ", href: "#chu-ky-so" },
      { label: "HÓA ĐƠN ĐIỆN TỬ", href: "#hoa-don-dien-tu" },
      { label: "BẢO HIỂM XÃ HỘI", href: "#bao-hiem-xa-hoi" },
      { label: "MAXV PRO 15.1", href: "#maxv-pro" },
    ],
  },
  {
    label: "DỊCH VỤ",
    href: "#dich-vu",
    children: [{ label: "TƯ VẤN DN", href: "#tu-van-doanh-nghiep" }],
  },
  {
    label: "BÁO GIÁ",
    href: "#bao-gia",
  },
  {
    label: "TIN TỨC",
    href: "#tin-tuc",
    children: [
      { label: "HOẠT ĐỘNG CÔNG TY", href: "#hoat-dong-cong-ty" },
      { label: "KHUYẾN MÃI", href: "#khuyen-mai" },
      { label: "TÀI CHÍNH - KẾ TOÁN", href: "#tai-chinh-ke-toan" },
      { label: "DOANH NGHIỆP", href: "#doanh-nghiep" },
      { label: "ỨNG DỤNG & TÀI LIỆU", href: "#ung-dung-tai-lieu" },
    ],
  },
  {
    label: "HỖ TRỢ",
    href: "#ho-tro",
    children: [
      { label: "HD SỬ DỤNG", href: "#huong-dan-su-dung" },
      { label: "TẢI XUỐNG TIỆN ÍCH", href: "#tai-xuong-tien-ich" },
    ],
  },
  {
    label: "ĐỐI TÁC/KH",
    href: "#doi-tac",
  },
  {
    label: "LIÊN HỆ",
    href: "#lien-he",
  },
];

function Navbar() {
  return null;
}

export default Navbar;
