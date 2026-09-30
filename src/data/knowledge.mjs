/**
 * Câu hỏi KIẾN THỨC — trắc nghiệm 2 lựa chọn (đúng/sai hoặc A/B).
 * Format: { tag, q, a } — a là đáp án đúng, hiển thị sau khi quẹt.
 * Lĩnh vực: khoa học tự nhiên, lịch sử, địa lý, văn hóa, công nghệ, y tế, ...
 */

export const KNOWLEDGE = [
  // ---------------- Khoa học tự nhiên ----------------
  { tag: "Khoa học", q: "Nước sôi ở 100 độ C dưới áp suất thường, đúng hay sai?", a: "Đúng — ở mực nước biển, nước sôi ở 100°C; lên cao áp suất thấp nên sôi sớm hơn." },
  { tag: "Khoa học", q: "Trái Đất quay quanh Mặt Trời hay Mặt Trời quay quanh Trái Đất?", a: "Trái Đất quay quanh Mặt Trời — mất khoảng 365,25 ngày cho một vòng." },
  { tag: "Khoa học", q: "Vì sao bầu trời màu xanh?", a: "Vì ánh sáng xanh bị các phân tử không khí tán xạ mạnh hơn (hiệu ứng Rayleigh)." },
  { tag: "Khoa học", q: "Kim loại nào ở thể lỏng trong điều kiện thường: thủy ngân hay chì?", a: "Thủy ngân — kim loại duy nhất lỏng ở nhiệt độ phòng." },
  { tag: "Khoa học", q: "Con người chỉ dùng 10% não bộ, đúng hay sai?", a: "Sai — não hoạt động gần như toàn bộ, ngay cả khi ngủ." },
  { tag: "Khoa học", q: "Ý nào nặng hơn rơi nhanh hơn trong chân không: đạn 1kg hay 10kg?", a: "Rơi bằng nhau — trong chân không không có lực cản, gia tốc như nhau." },
  { tag: "Khoa học", q: "Cây lấy chất dinh dưỡng chủ yếu từ đất hay từ không khí và nước?", a: "Từ không khí và nước — chất khô của cây phần lớn được tạo từ CO2 và H2O qua quang hợp." },
  { tag: "Khoa học", q: "Sét có nóng hơn bề mặt Mặt Trời không?", a: "Có — sét nóng khoảng 30.000°C, gấp ~5 lần bề mặt Mặt Trời (~5.500°C)." },
  { tag: "Khoa học", q: "Hành tinh nào lớn nhất hệ Mặt Trời?", a: "Sao Mộc — lớn hơn tất cả các hành tinh khác cộng lại." },
  { tag: "Khoa học", q: "DNA hình gì: xoắn kép hay vòng tròn kép?", a: "Xoắn kép — cấu trúc thang xoắn do Watson và Crick mô tả năm 1953." },
  { tag: "Khoa học", q: "Máu trong tĩnh mạch màu xanh, đúng hay sai?", a: "Sai — máu giàu oxy thiếu (tĩnh mạch) màu đỏ sẫm, chỉ tỏa ra màu xanh qua da." },
  { tag: "Khoa học", q: "Tia sáng nhanh hay âm thanh nhanh?", a: "Tia sáng — khoảng 300.000 km/s, gấp gần một triệu lần tốc độ âm thanh." },
  { tag: "Khoa học", q: "Con bướm nếm thức ăn bằng bộ phận nào: lưỡi hay chân?", a: "Chân — vị giác của bướm nằm ở đôi chân sau." },
  { tag: "Khoa học", q: "Nước đóng băng thì thể tích tăng hay giảm?", a: "Tăng ~9% — vì thế nước đá nổi trên nước lỏng." },
  { tag: "Khoa học", q: "Cơ thể người có bao nhiêu xương ở người trưởng thành: 206 hay 306?", a: "206 — em bé sinh ra có ~300, nhiều xương sau đó hợp nhất." },
  { tag: "Khoa học", q: "Vì sao sao lấp lánh còn hành tinh thì không?", a: "Vì ánh sáng sao bị khí quyển nhiễu loạn; hành tinh là điểm sáng gần, ít bị nhiễu." },
  { tag: "Khoa học", q: "Thạch sùng (tắc kè) bám tường nhờ gì: chất dính hay chân hút vi mô?", a: "Nhờ hàng triệu sợi lông nhỏ tận dụng lực van der Waals, không phải chất dính." },
  { tag: "Khoa học", q: "Ánh sáng Mặt Trời đến Trái Đất mất bao lâu: 8 phút hay 8 giây?", a: "Khoảng 8 phút 20 giây — quãng đường 150 triệu km." },
  { tag: "Khoa học", q: "Đứt xương rồi thì xương không mọc lại, đúng hay sai?", a: "Sai — xương tự lành bằng cách tạo xương mới quanh chỗ gãy." },
  { tag: "Khoa học", q: "Đơn vị nhỏ nhất của vật chất sống là gì: tế bào hay nguyên tử?", a: "Tế bào — đơn vị cấu tạo và chức năng của sự sống." },
  { tag: "Khoa học", q: "Tàu vũ trụ quay về Trái Đất không bị cháy là nhờ bề dày khí quyển, đúng hay sai?", a: "Giảm tốc — đốt động cơ ngược chiều để tụt khỏi quỹ đạo." },
  { tag: "Khoa học", q: "Nước muối đông đá nhanh hơn nước ngọt, đúng hay sai?", a: "Sai — nước muối có nhiệt độ đóng băng thấp hơn (điểm hạ nhiệt)." },
  { tag: "Khoa học", q: "Loài nào có tim to nhất đại dương: cá voi xanh hay cá mập trắng?", a: "Cá voi xanh — tim nặng ~400kg, to như một chiếc xe nhỏ." },
  { tag: "Khoa học", q: "Vì sao móng tay mọc nhanh hơn móng chân?", a: "Vì tay được máu nuôi nhiều hơn và có tần suất chấn thương/tái tạo cao hơn." },

  // ---------------- Thiên văn ----------------
  { tag: "Khoa học", q: "Mặt Trăng tự quay quanh Trái Đất mất bao lâu: 27 ngày hay 7 ngày?", a: "Khoảng 27,3 ngày — vì vậy ta luôn thấy một mặt của Mặt Trăng." },
  { tag: "Khoa học", q: "Hành tinh đỏ trong hệ Mặt Trời là hành tinh nào?", a: "Sao Hỏa — màu đỏ đến từ sắt oxit trên bề mặt." },
  { tag: "Khoa học", q: "Ngày và đêm trên Sao Thủy gần bằng nhau, đúng hay sai?", a: "Sai — một ngày Mặt Trời trên Sao Thủy dài gấp gần 2 lần năm của nó." },
  { tag: "Khoa học", q: "Vành đai nào bao quanh Sao Thổ: băng và đá hay bụi sắt?", a: "Chủ yếu là băng và đá — từ mảnh nhỏ đến tảng lớn vài mét." },
  { tag: "Khoa học", q: "Sao băng thực chất là gì: sao cháy hay bụi không khí cháy?", a: "Bụi đá nhỏ lao vào khí quyển và ma sát cháy sáng, không phải ngôi sao." },
  { tag: "Khoa học", q: "Vũ trụ có tiếng vọng của Big Bang không?", a: "Có — bức xạ nền vi sóng vũ trụ (CMB) là 'ánh sáng hóa thạch' của Big Bang." },
  { tag: "Khoa học", q: "Hố đen hút mọi thứ chắc như máy hút, đúng hay sai?", a: "Sai — ở xa hố đen, trọng lực hoạt động như mọi vật thể cùng khối lượng khác." },
  { tag: "Khoa học", q: "Ngày trên Sao Kim dài hơn năm trên Sao Kim, đúng hay sai?", a: "Đúng — Sao Kim quay rất chậm, một ngày dài ~243 ngày Trái Đất, năm chỉ ~225 ngày." },

  // ---------------- Lịch sử ----------------
  { tag: "Lịch sử", q: "Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?", a: "Ngô Quyền — dùng cọc gỗ nhọn nhấn chìm thủy quân Nam Hán." },
  { tag: "Lịch sử", q: "Ai là người sáng lập nhà Nguyễn: Gia Long hay Minh Mạng?", a: "Gia Long — lên ngôi 1802, thống nhất đất nước sau thời Trịnh-Nguyễn phân liệt." },
  { tag: "Lịch sử", q: "Hai Bà Trưng khởi nghĩa năm nào: năm 40 hay năm 938?", a: "Năm 40 — Trưng Trắc, Trưng Nhị nổi dậy chống Đông Hán." },
  { tag: "Lịch sử", q: "Thánh Gióng theo truyền thuyết cưỡi gì đi đánh giặc?", a: "Ngựa sắt — cùng roi sắt, vẫy roi thành đàn ngựa sắt hiện ra." },
  { tag: "Lịch sử", q: "Chiến dịch Điện Biên Phủ kết thúc năm nào: 1954 hay 1964?", a: "1954 — ngày 7/5/1954, toàn bộ tập đoàn cứ điểm đầu hàng." },
  { tag: "Lịch sử", q: "Ai sáng tạo ra chữ Quốc ngữ Việt Nam dựa trên chữ Latinh?", a: "Các giáo sĩ phương Tây (tiêu biểu Alexandre de Rhodes) cùng trợ tá người Việt." },
  { tag: "Lịch sử", q: "Kim tự tháp Giza được xây để làm gì: lăng mộ hay đền thờ?", a: "Lăng mộ — cho pharaoh Khufu và gia đình, ~4.500 năm trước." },
  { tag: "Lịch sử", q: "Tấm vé tàu Titanic: tàu chìm năm nào — 1912 hay 1921?", a: "1912 — đêm 14-15/4 sau khi va chạm với tảng băng trôi." },
  { tag: "Lịch sử", q: "Vua nào thống nhất nước Việt năm 1802: Quang Trung hay Gia Long?", a: "Gia Long (Nguyễn Ánh) — lập nhà Nguyễn, đặt tên nước là Việt Nam." },
  { tag: "Lịch sử", q: "Quang Trung đại phá quân Thanh vào dịp Tết nào?", a: "Tết Kỷ Dậu 1789 — trận Ngọc Hồi-Đống Đa còn gọi chiến thắng Ngọ Hồi." },
  { tag: "Lịch sử", q: "Bức tường Béclin (Berlin) sụp đổ năm nào: 1989 hay 1991?", a: "1989 — mở đường cho tái thống nhất nước Đức năm 1990." },
  { tag: "Lịch sử", q: "Ai là nữ hoàng đầu tiên của Ai Cập cổ đại được biết đến rộng rãi?", a: "Hatshepsut — trị vì ~1473-1458 TCN, thường đội râu giả trong tượng." },
  { tag: "Lịch sử", q: "Chiến tranh thế giới thứ hai bắt đầu khi nước nào xâm lược nước nào?", a: "Đức xâm lược Ba Lan — 1/9/1939, Anh-Pháp tuyên chiến với Đức." },
  { tag: "Lịch sử", q: "Văn minh nào xây Machu Picchu: Inca hay Maya?", a: "Inca — thành trì trên núi Andes, Peru, thế kỷ 15." },

  // ---------------- Địa lý ----------------
  { tag: "Địa lý", q: "Sông nào dài nhất thế giới: Nile hay Amazon?", a: "Nile (~6.650 km) theo tính toán truyền thống; một số nghiên cứu cho Amazon dài hơn." },
  { tag: "Địa lý", q: "Đỉnh Fansipan cao bao nhiêu mét: 3.143m hay 1.443m?", a: "3.143 m — nóc nhà Đông Dương, thuộc dãy Hoàng Liên Sơn." },
  { tag: "Địa lý", q: "Quốc gia nào có nhiều múi giờ nhất: Nga hay Mỹ?", a: "Nga — 11 múi giờ trải dài từ Kaliningrad tới Kamchatka." },
  { tag: "Địa lý", q: "Sa mạc lớn nhất thế giới là sa mạc nào: Sahara hay Nam Cực?", a: "Nam Cực — sa mạc lạnh lớn nhất; Sahara là sa mạc nóng lớn nhất." },
  { tag: "Địa lý", q: "Hồ nào sâu nhất thế giới: Baikal hay hồ Great Slave?", a: "Baikal — sâu 1.642 m, chứa ~20% nước ngọt không đóng băng của thế giới." },
  { tag: "Địa lý", q: "Việt Nam có đường biên giới đất liền với bao nhiêu quốc gia?", a: "3 nước: Trung Quốc, Lào, Campuchia." },
  { tag: "Địa lý", q: "Đảo nào lớn nhất thế giới: Greenland hay Madagascar?", a: "Greenland — ~2,17 triệu km² (Australia là lục địa, không tính đảo)." },
  { tag: "Địa lý", q: "Thành phố nào có dân số đông nhất Việt Nam: Hà Nội hay TP.HCM?", a: "TP.HCM — hơn 9 triệu dân (nội thành), gấp rưỡi Hà Nội." },
  { tag: "Địa lý", q: "Đường xích đạo đi qua Kenya đúng hay sai?", a: "Đúng — Kenya thuộc Đông Phi, bị xích đạo chia đôi." },
  { tag: "Địa lý", q: "Quốc gia nào nhỏ nhất thế giới: Monaco hay Vatican?", a: "Vatican — ~0,44 km², nhỏ hơn cả Monaco (~2 km²)." },
  { tag: "Địa lý", q: "Biển nào mặn nhất thế giới: Biển Chết hay Biển Đỏ?", a: "Biển Chết — độ mặn ~34%, gấp gần 10 lần đại dương, người nằm nổi trên mặt." },
  { tag: "Địa lý", q: "Việt Nam nằm ở bán đảo nào?", a: "Bán đảo Đông Dương — phía đông bán đảo, giáp Biển Đông." },

  // ---------------- Văn hóa ----------------
  { tag: "Văn hóa", q: "Tết Nguyên đán ở Việt Nam theo lịch nào: âm lịch hay dương lịch?", a: "Âm lịch — tháng giêng là tháng đầu năm, thường rơi vào cuối tháng 1 hoặc 2 dương lịch." },
  { tag: "Văn hóa", q: "Nhân vật Tấm trong truyền thuyết thể hiện điều gì: lương thiện hay ghen ghét?", a: "Lương thiện — Tấm đại diện người hiền gặp may, Cám đại diện gian xảo bị trừng phạt." },
  { tag: "Văn hóa", q: "Câu đối đỏ ngày Tết thường treo ở đâu?", a: "Hai bên cửa nhà — chữ Hán hoặc chữ Quốc ngữ, chúc Tết may mắn." },
  { tag: "Văn hóa", q: "Nhã nhạc cung đình Huế được UNESCO công nhận là di sản gì: phi vật thể hay vật thể?", a: "Di sản văn hóa phi vật thể — công nhận năm 2003." },
  { tag: "Văn hóa", q: "Người Nhật uống trà theo nghi thức gì nổi tiếng?", a: "Trà đạo (sadō) — nghi thức pha và uống trà xanh matcha đầy tính triết học." },
  { tag: "Văn hóa", q: "Lễ hội nào ở Việt Nam có đua voi nổi tiếng?", a: "Lễ hội đua voi Tây Nguyên (Đắk Lắk) — thường vào tháng 3 âm lịch." },
  { tag: "Văn hóa", q: "Trò chơi dân gian nào dùng gạch và viên tròn: ô ăn quan hay kéo co?", a: "Ô ăn quan — trò chơi tính toán với sỏi hoặc hạt, phổ biến ở nông thôn Việt." },
  { tag: "Văn hóa", q: "Nhà rông là nhà truyền thống của dân tộc nào: Ê Đê hay Ba Na?", a: "Ba Na (và một số dân tộc Tây Nguyên) — nhà cao, mái lớn, trung tâm sinh hoạt cộng đồng." },
  { tag: "Văn hóa", q: "Con vật linh thiêng nhất trong văn hóa Việt, tổ tiên của người Việt là con gì: rồng hay hổ?", a: "Rồng — tiên tổ Lạc Long Quân là rồng, người Việt tự xưng 'con Rồng cháu Tiên'." },
  { tag: "Văn hóa", q: "Nón bài thơ nổi tiếng là đặc sản văn hóa của miền nào: Huế hay Sa Pa?", a: "Huế — nón bài thơ với hình ô chữ ẩn dưới lớp lá." },

  // ---------------- Công nghệ ----------------
  { tag: "Công nghệ", q: "HTML là viết tắt của gì?", a: "HyperText Markup Language — ngôn ngữ đánh dấu cấu trúc trang web." },
  { tag: "Công nghệ", q: "AI là viết tắt của cụm từ nào?", a: "Artificial Intelligence — trí tuệ nhân tạo." },
  { tag: "Công nghệ", q: "Ai là người sáng lập Microsoft cùng Paul Allen: Bill Gates hay Steve Jobs?", a: "Bill Gates — Steve Jobs sáng lập Apple cùng Steve Wozniak." },
  { tag: "Công nghệ", q: "Wi-Fi truyền dữ liệu bằng sóng gì: vô tuyến hay sóng âm?", a: "Sóng vô tuyến — dải 2,4 GHz và 5 GHz phổ biến." },
  { tag: "Công nghệ", q: "Mật khẩu mạnh nên chứa gì: tên của bạn hay hỗn hợp chữ-số-ký tự dài?", a: "Hỗn hợp dài ít nhất 12 ký tự — tên và ngày sinh dễ bị dò." },
  { tag: "Công nghệ", q: "Máy tính xử lý dữ liệu bằng hệ đếm nào: nhị phân hay thập lục phân cơ bản?", a: "Nhị phân (0/1) — thập lục phân chỉ là cách viết gọn cho con người." },
  { tag: "Công nghệ", q: "Ai gửi email đầu tiên: Ray Tomlinson hay Tim Berners-Lee?", a: "Ray Tomlinson — năm 1971, người chọn ký tự @ cho địa chỉ email." },
  { tag: "Công nghệ", q: "GPS hoạt động dựa vào gì: vệ tinh hay trạm phát sóng?", a: "Vệ tinh — ít nhất 4 vệ tinh để xác định vị trí 3 chiều." },

  // ---------------- Y tế & cơ thể ----------------
  { tag: "Y tế", q: "Cơ quan nào lọc máu: gan hay thận?", a: "Thận — lọc chất thải tạo nước tiểu; gan là 'nhà máy hóa sinh' đa năng." },
  { tag: "Y tế", q: "Tiêm vaccine giúp cơ thể làm gì?", a: "Tạo miễn dịch chủ động — tập huấn hệ miễn dịch nhận diện mầm bệnh trước khi gặp thật." },
  { tag: "Y tế", q: "Kháng sinh chữa được cúm thông thường, đúng hay sai?", a: "Sai — cúm do virus, kháng sinh chỉ diệt vi khuẩn; lạm dụng gây kháng thuốc." },
  { tag: "Y tế", q: "Tim bơm máu theo một chiều hay hai chiều?", a: "Một chiều — van tim đảm bảo máu không trào ngược." },
  { tag: "Y tế", q: "Ho là một loại bệnh hay là một phản xạ của cơ thể?", a: "Cách hô hấp — ho là phản xạ tống dị vật/khí cay khỏi đường thở." },
  { tag: "Y tế", q: "Vitamin nào tổng hợp nhờ ánh nắng mặt trời: vitamin D hay vitamin C?", a: "Vitamin D — da tổng hợp khi tiếp xúc tia UVB." },
  { tag: "Y tế", q: "Sốt cao thì phải hạ bằng cách cào tiết (cạo gió), đúng hay sai?", a: "Sai — hạ sốt bằng hạ nhiệt, uống nước, thuốc theo chỉ định; cạo gió không hạ sốt." },
  { tag: "Y tế", q: "Dạ dày môi trường acid hay kiềm?", a: "Acid mạnh — pH ~1,5-3,5 giúp tiêu hóa protein và diệt vi khuẩn." },
  { tag: "Y tế", q: "Người lớn có bao nhiêu răng vĩnh viễn: 32 hay 28?", a: "32 nếu tính cả răng khôn; nhiều người mọc thiếu hoặc nhổ nên còn 28." },
  { tag: "Y tế", q: "Uống đủ nước giúp gì cho não?", a: "Duy trì tập trung và trí nhớ — mất nước nhẹ cũng làm giảm hiệu năng nhận thức." },

  // ---------------- Kinh tế & xã hội ----------------
  { tag: "Xã hội", q: "Lạm phát là gì: giá cả tăng hay tiền mất giá?", a: "Cả hai là một hiện tượng — giá tăng tương đương sức mua của tiền giảm." },
  { tag: "Xã hội", q: "GDP đo gì: tổng sản lượng kinh tế hay tổng số người?", a: "Tổng sản phẩm quốc nội — giá trị hàng hóa-dịch vụ làm ra trong một thời kỳ." },
  { tag: "Xã hội", q: "Ngân hàng trung ương phát hành tiền hay gom tiền thuế?", a: "Phát hành tiền và điều hành chính sách tiền tệ; thuế là việc cơ quan thuế." },
  { tag: "Xã hội", q: "Cổ phiếu là gì: giấy vay tiền hay phần sở hữu công ty?", a: "Phần sở hữu — cổ đông là chủ sở hữu một phần công ty." },
  { tag: "Xã hội", q: "Bảo hiểm hoạt động dựa trên nguyên tắc nào: chia sẻ rủi ro hay đầu tư chắc thắng?", a: "Chia sẻ rủi ro — nhiều người góp, ai gặp rủi ro được chi trả." },
  { tag: "Xã hội", q: "Lợi suất của tiền gửi tiết kiệm luôn thắng lạm phát, đúng hay sai?", a: "Sai — nhiều kỳ lãi suất tiết kiệm thấp hơn lạm phát, tiền mất giá thực." },

  // ---------------- Giao thông & luật ----------------
  { tag: "Giao thông", q: "Ở Việt Nam, xe chạy theo bên nào của đường?", a: "Bên phải — luật giao thông đường bộ quy định đi bên phải theo chiều đi." },
  { tag: "Giao thông", q: "Đèn vàng ở ngã tư nghĩa là gì: chạy nhanh hay chậm lại chuẩn bị dừng?", a: "Chậm lại chuẩn bị dừng — không phải xanh để tăng tốc." },
  { tag: "Giao thông", q: "Đi xe máy không đội mũ bảo hiểm bị phạt, đúng hay sai?", a: "Đúng — mũ bảo hiểm là bắt buộc, vi phạm bị phạt tiền." },
  { tag: "Giao thông", q: "Nồng độ cồn cho phép khi lái xe ở Việt Nam hiện nay là bao nhiêu?", a: "0 — luật cấm tuyệt đối người điều khiển phương tiện có cồn trong máu/hơi thở." },
  { tag: "Giao thông", q: "Vạch sơn liền kẻ giữa đường nghĩa là gì: được vượt hay không được vượt?", a: "Không được vượt — vạch liền cấm vượt, vạch đứt cho phép quan sát và vượt." },
  { tag: "Giao thông", q: "Đi bộ qua đường ở đâu là an toàn nhất: vạch kẻ và đèn tín hiệu hay đoạn vắng?", a: "Vạch kẻ có đèn tín hiệu — nơi tài xế được báo trước người qua đường." },

  // ---------------- Môi trường ----------------
  { tag: "Môi trường", q: "Hiệu ứng nhà kính do khí nào gây ra chủ yếu: CO2 hay oxy?", a: "CO2 (và methane, hơi nước) — giữ nhiệt trong khí quyển, oxy không giữ nhiệt." },
  { tag: "Môi trường", q: "Túi nilon phân hủy nhanh trong đất, đúng hay sai?", a: "Sai — mất hàng trăm năm, vì vậy hạn chế nilon dùng một lần." },
  { tag: "Môi trường", q: "Rừng nào được gọi là 'phổi xanh' của Trái Đất: Amazon hay rừng Siberia?", a: "Amazon — sản xuất một phần lớn oxy và hấp thụ CO2 khổng lồ." },
  { tag: "Môi trường", q: "Năng lượng nào là năng lượng tái tạo: điện than hay điện gió?", a: "Điện gió — cùng mặt trời, nước; than là hóa thạch và không tái tạo." },
  { tag: "Môi trường", q: "Băng ở Nam Cực tan làm mực nước biển thế nào?", a: "Dâng lên — nước ngọt từ băng chảy ra đại dương, đe dọa vùng ven biển." },

  // ---------------- Ngôn ngữ & toán ----------------
  { tag: "Kiến thức", q: "Số 0 là số nguyên tố, đúng hay sai?", a: "Sai — số nguyên tố phải lớn hơn 1 và chỉ chia hết cho 1 và chính nó." },
  { tag: "Kiến thức", q: "Một tam giác có tổng ba góc bằng bao nhiêu độ?", a: "180 độ — đúng cho mọi tam giác trong hình học phẳng." },
  { tag: "Kiến thức", q: "Tiếng nào nói đông người nhất thế giới: tiếng Anh hay tiếng Trung Quảng Đông?", a: "Tiếng Trung (Phổ thông) đông người bản ngữ nhất; tiếng Anh phổ biến nhất nếu tính cả ngôn ngữ thứ hai." },
  { tag: "Kiến thức", q: "Chữ số Ả Rập (1, 2, 3...) có nguồn gốc từ đâu: Ấn Độ hay Ả Rập?", a: "Ấn Độ — người Ả Rập truyền sang châu Âu nên tên gọi gắn với Ả Rập." },
  { tag: "Kiến thức", q: "Pi (π) là số hữu tỷ, đúng hay sai?", a: "Sai — π là số vô tỷ, số thập phân không lặp không hữu hạn." },
];
