/**
 * Câu hỏi ỨNG XỬ TÌNH HUỐNG — tình huống thực tế, người dùng quẹt chọn cách xử lý,
 * sau đó hiện gợi ý cách ứng xử khôn ngoan.
 * Format: { tag, q, a } — a là gợi ý ứng xử.
 */

export const SITUATION = [
  // ---------------- Xã hội ----------------
  { tag: "Ứng xử", q: "Hàng xóm hát karaoke quá 23h, bạn xử lý thế nào: lên nói chuyện hay báo công an?", a: "Nói chuyện thân tình trước: đề nghị giảm âm lượng sau 22h. Báo chính quyền chỉ khi đã nhắc mà không được." },
  { tag: "Ứng xử", q: "Ai đó cắt hàng trước mặt bạn ở quầy và giả vờ không thấy, bạn làm gì?", a: "Nói lịch sự nhưng rõ: \"Chị/anh ơi, mình xếp trước anh/chị ơi\". Đa số sẽ tự giác; to tiếng chỉ làm mọi người khó chịu." },
  { tag: "Ứng xử", q: "Bạn thấy người lạ bỏ quên ví trên bàn ăn, bạn sẽ làm gì?", a: "Giữ ví, đợi chủ ở lại hoặc giao cho nhân viên quán/bảo an; nếu có giấy tờ, liên hệ chủ qua thông tin trong ví." },
  { tag: "Ứng xử", q: "Trong thang máy có người hắt hơi không che miệng, bạn nhắc thế nào?", a: "Không phê phán trước mặt mọi người. Nếu thân tình, nhắc khẽ: \"Mình ho/hắt xì nhiều quá, nhớ che miệng nha\"." },
  { tag: "Ứng xử", q: "Bị người quen hỏi lương, bạn trả lời thế nào cho khéo?", a: "Đánh trống lỏng: \"Lương em đủ tiêu thôi ạ, chị/anh tính sao chuyện xyz?\" — chuyển hướng trò chuyện, không cần số thật." },
  { tag: "Ứng xử", q: "Một người bạn liên tục đi trễ, làm cả nhóm chờ. Bạn nói thẳng hay im lặng?", a: "Nói riêng, thẳng nhưng nhẹ: thống nhất giờ hẹn trễ 15 phút, hoặc để người đó nhận nhiệm vụ đặt bàn để có trách nhiệm giờ giấc." },
  { tag: "Ứng xử", q: "Ai đó cho bạn quà mà bạn không thích, bạn nhận thế nào?", a: "Nhận lòng tốt, cảm ơn rõ; nếu cần, sau này đổi hoặc trao lại hợp lý — không làm người tặng mất mặt." },
  { tag: "Ứng xử", q: "Trên xe buýt có người cần nhường ghế, bạn giả ngủ hay nhường?", a: "Nhường — một cái gật đầu là đủ; nếu bạn cần giữ ghế vì lý do sức khỏe, giải thích ngắn là được." },
  { tag: "Ứng xử", q: "Người quen mượn tiền rồi im lặng không trả, bạn làm gì?", a: "Nhắc thẳng, nhẹ nhàng, có mốc thời gian cụ thể: \"Tuần này anh/chị sắp xếp được chưa?\". Nếu lớn, giữ tin nhắn/biên nhận." },
  { tag: "Ứng xử", q: "Trong họp mặt gia đình, có người hỏi chuyện nhạy cảm (bạn gái, lương...). Bạn xử lý thế nào?", a: "Trả lời vòng hoặc nói thẳng nhẹ nhàng: \"Chuyện này cháu muốn giữ ạ\", rồi chuyển đề tài sang hỏi ngược lại người đó." },
  { tag: "Ứng xử", q: "Bạn bè rủ chơi nhưng bạn mệt, bạn nhận để đỡ mất lòng hay từ chối?", a: "Từ chối rõ ràng kèm hẹn khác: \"Hôm nay mình mệt, tuần sau mình rủ bù nha\" — nhận rồi bỏ cuộc còn làm người khác thất vọng hơn." },
  { tag: "Ứng xử", q: "Ai đó ngồi sai chỗ của bạn ở rạp phim, bạn xử lý thế nào?", a: "Cho xem vé và hỏi lịch sự; nếu người đó nhất định, báo nhân viên rạp xử lý, không tranh cãi giữa rạp." },
  { tag: "Ứng xử", q: "Người lạ trên mạng công kích bạn, bạn đáp trả hay bỏ qua?", a: "Bỏ qua hoặc chặn — cãi nhau trên mạng hầu như không có người thắng; nếu bị đe dọa, chụp màn hình và báo quản trị." },
  { tag: "Ứng xử", q: "Bạn vô tình nghe tin mật của người khác, bạn xử lý thế nào?", a: "Giữ kín và không nhắc lại. Nếu tin đó gây hại cho ai đó, cân nhắc nhắc khéo người liên quan." },
  { tag: "Ứng xử", q: "Ở nhà hàng, món lên sai so với order, bạn làm gì?", a: "Báo phục vụ ngay, mô tả order gốc; nhờ đổi món. Bực tức hay phạt tiền tip không giúp món đúng hơn." },

  // ---------------- Công sở ----------------
  { tag: "Công sở", q: "Sếp giao việc lúc 17h30 ngày thứ Sáu, bạn xử lý thế nào?", a: "Làm rõ mức ưu tiên và deadline: nếu gấp thật thì nhận, nếu không, đề nghị Monday sáng. Có trao đổi là không bị hiểu là né việc." },
  { tag: "Công sở", q: "Đồng nghiệp nhận công bạn làm, bạn phản ứng ra sao?", a: "Công bằng trong cuộc họp: trình bày phần mình làm kèm bằng chứng, hỏi thẳng sau cuộc họp. Không mỉa mai, không tự ái hành động." },
  { tag: "Công sở", q: "Bạn phát hiện sai sót trong báo cáo của sếp trước cuộc họp lớn, bạn nói thế nào?", a: "Nhắn riêng trước cuộc họp: \"Anh/chị xem lại số này giúp em nhé\" — cho sếp cơ hội sửa trước khi ra gặp cả phòng." },
  { tag: "Công sở", q: "Nhóm làm việc có người không hoàn thành phần việc, bạn xử lý thế nào?", a: "Trao đổi riêng để hiểu khó khăn, hỗ trợ nếu được; vẫn công khai tiến độ cho nhóm. Kéo việc về mình âm thầm sẽ khiến người đó càng ỷ lại." },
  { tag: "Công sở", q: "Bạn được mời họp nhưng không liên quan tới mình, bạn xin phép rời đúng không?", a: "Đúng — hỏi lịch sự: \"Em có cần tham dự không ạ?\"; nếu không cần, xin phép về làm việc của mình. Tiết kiệm thời gian cả phòng." },
  { tag: "Công sở", q: "Bị sếp quát trước mặt đồng nghiệp, bạn phản ứng thế nào?", a: "Giữ bình tĩnh trong cuộc họp, gặp sếp riêng sau: \"Em muốn góp ý về cách trao đổi vừa nãy\". Đáp trả tại chỗ thường làm mình mất hình ảnh." },
  { tag: "Công sở", q: "Đồng nghiệp hay kể chuyện phiếm trong giờ làm, bạn tập trung thế nào?", a: "Từ chối lịch sự kèm lý do: \"Mình đang bí phần này, 12h nói chuyện nha\"; dùng tai nghe là tín hiệu phổ biến." },
  { tag: "Công sở", q: "Bạn làm lỗi, sếp chưa phát hiện. Bạn giấu hay nhận lỗi?", a: "Nhận lỗi sớm kèm phương án sửa — lỗi nhỏ phát hiện sớm là chuyện nhỏ, giấu rồi lộ ra là mất uy tín lớn." },
  { tag: "Công sở", q: "Được khen thay cả nhóm, bạn nhận thế nào?", a: "Nhận và chia công: \"Cảm ơn anh/chị, cả nhóm mình làm chung ạ\" — không khiêm tốn đến mức phủ nhận công sức của mình." },
  { tag: "Công sở", q: "Đồng nghiệp kể xấu bạn sau lưng, bạn biết. Bạn đối diện thế nào?", a: "Gặp riêng, hỏi thẳng không căng: \"Em nghe chuyện anh/chị nói về em, anh/chị có góp ý gì trực tiếp giúp em không?\" — đa số sẽ lúng túng và dừng lại." },
  { tag: "Công sở", q: "Bạn được offer lương cao hơn ở công ty cũ, bạn xin nghỉ thế nào?", a: "Nói thật, lịch sự, báo trước đúng luật: chân thành cảm ơn, bàn giao kỹ, không đốt cầu — ngành hẹp, gặp lại là chuyện thường." },
  { tag: "Công sở", q: "Khách hàng nóng giận mắng bạn không phải lỗi của bạn, bạn xử lý thế nào?", a: "Nghe hết, không cãi: \"Em hiểu chị/anh bực, để em kiểm tra ngay\"; sau đó đưa phương án cụ thể với mốc thời gian." },

  // ---------------- Gia đình ----------------
  { tag: "Gia đình", q: "Bố mẹ ép bạn về quê ăn Tết nhưng bạn đã có kế hoạch riêng, bạn xử lý thế nào?", a: "Nói sớm, nói thật, kèm bù đắp: báo trước vài tuần, đề nghị dịp khác cả nhà đi chơi cùng — im lặng rồi hủy phút chót là tệ nhất." },
  { tag: "Gia đình", q: "Anh chị em mượn tiền của bạn nhưng dùng sai mục đích, bạn làm gì?", a: "Nói rõ ranh giới: giúp được gì, không giúp gì. Tiền cho người thân nên xem như cho, không phải cho vay thu lời." },
  { tag: "Gia đình", q: "Bố mẹ so sánh bạn với con nhà người ta, bạn phản ứng thế nào?", a: "Không cãi to. Nói cảm xúc của mình: \"Con nghe vậy buồn lắm, mẹ khen con khi con làm tốt được không?\" — đa số phụ huynh không nhận ra mình đang làm con tổn thương." },
  { tag: "Gia đình", q: "Bữa cơm gia đình có người cãi nhau to, bạn là con trong cuộc, bạn làm gì?", a: "Không phe phái, tách hai bên ra khỏi cuộc cãi hoặc chuyển đề tài; khi ai bình tĩnh mới nói chuyện riêng." },
  { tag: "Gia đình", q: "Bạn phát hiện bố mẹ lừa dối nhau, bạn xử lý thế nào?", a: "Không làm thầy bói gia đình. Cân nhắc nói riêng với người bạn thân thiết nhất trong hai người, tránh khiến cả nhà đổ vỡ vì một phát hiện chưa kiểm chứng." },
  { tag: "Gia đình", q: "Người thân lớn tuổi cương quyết dùng thuốc theo mách bảo của hàng xóm, bạn khuyên thế nào?", a: "Không phản bác thẳng: đề nghị đi khám cùng, để bác sĩ nói. Sách vở trên mạng thường thua một câu \"quen nào cũng vậy mà khỏi\"." },
  { tag: "Gia đình", q: "Con bạn nói dối nhỏ, bạn xử lý thế nào?", a: "Không đánh, không siết: hỏi vì sao con thấy cần nói dối, cho con thấy nói thật không bị phạt nặng hơn. Trẻ nói dối vì sợ, không vì hư." },
  { tag: "Gia đình", q: "Họp mặt dòng họ, bạn bị nhờ chi nhiều hơn khả năng, bạn trả lời thế nào?", a: "Đóng theo khả năng, nói rõ: \"Cháu đóng mức này, phần còn lại nhờ các chú/bác hỗ trợ\" — im lặng rồi thiếu là mất lòng hai lần." },
  { tag: "Gia đình", q: "Bố mẹ can thiệp cách nuôi con của bạn, bạn xử lý thế nào?", a: "Cảm ơn ý tốt, phân công rõ: chuyện ăn ngủ học do cha mẹ quyết, ông bà hỗ trợ theo khung đó. Cãi nhau trước mặt trẻ là bất lợi nhất." },
  { tag: "Gia đình", q: "Anh chị em cạnh nhau xin bố mẹ chia tài sản, bạn đứng giữa, bạn làm gì?", a: "Không tự nhận trọng tài. Đề nghị gọi họp mặt cả nhà, ghi rõ trên giấy, có nhân chứng — sự minh bạch bảo vệ cả mối quan hệ." },

  // ---------------- Bạn bè ----------------
  { tag: "Bạn bè", q: "Bạn thân kể chuyện buồn, bạn khuyên ngay hay lắng nghe trước?", a: "Lắng nghe trước, khuyên sau — hầu hết người buồn cần được nghe, không cần giải pháp vội. Hỏi: \"Bạn muốn mình nghe hay muốn mình góp ý?\"" },
  { tag: "Bạn bè", q: "Bạn thấy bạn thân yêu một người có vấn đề rõ ràng, bạn nói thế nào?", a: "Nói một lần, nói cụ thể sự việc (không nói cảm tính), rồi tôn trọng quyết định. Lặp lại liên tục chỉ đẩy người ta về phía người kia." },
  { tag: "Bạn bè", q: "Nhóm bạn chia tiền ăn nhưng có người không đóng phần, bạn xử lý thế nào?", a: "Nhắc công khai nhẹ nhàng bằng app chia bill (nhiều app tự nhắc giúp) — nhờ công cụ nhắc đỡ mất mặt hơn nhắc miệng." },
  { tag: "Bạn bè", q: "Bạn bè rủ uống rượu mà bạn phải lái xe, bạn từ chối thế nào?", a: "Từ chối dứt khoát: \"Mình lái xe\". Đây là ranh giới an toàn, không có ngoại lệ — người thật sự quý bạn sẽ không ép." },
  { tag: "Bạn bè", q: "Bạn bè kể chuyện riêng của bạn cho người khác, bạn xử lý thế nào?", a: "Nói trực tiếp cảm xúc: \"Mình tin bạn mới kể, bạn giữ giúp mình\". Nếu lặp lại, hạ mức chia sẻ thay vì cắt quan hệ ngay." },
  { tag: "Bạn bè", q: "Hai người bạn thân cãi nhau và kéo bạn đứng về phe, bạn làm gì?", a: "Không chọn phe, nghe cả hai, nói: \"Mình quý cả hai, chuyện này hai bạn tự giải quyết được\". Đứng phe chỉ nhân đôi mâu thuẫn." },
  { tag: "Bạn bè", q: "Bạn bè mượn xe rồi làm hỏng mà không nói gì, bạn xử lý thế nào?", a: "Nói sự việc, yêu cầu phương án: sửa hoặc chia chi phí. Không nhắc thì lần sau còn xảy ra, nhắc mà nổi giận là dấu hiệu quan hệ lệch." },
  { tag: "Bạn bè", q: "Nhóm bạn trêu một người quá mức đến người đó khó chịu, bạn là thành viên nhóm, bạn làm gì?", a: "Chuyển đề tài ngay lúc đó, sau đó nói riêng với đầu têu: \"Nó khó chịu thật rồi, thôi nha\". Im lặng đồng nghĩa đồng thuận." },

  // ---------------- Tình yêu ----------------
  { tag: "Ứng xử", q: "Người yêu seen tin nhắn cả ngày không rep, bạn hỏi thẳng hay im lặng cho hết bực?", a: "Hỏi thẳng nhẹ nhàng khi gặp mặt: \"Dạo này em/anh bận gì thế, seen mà không rep make anh/em lo\". Im lặng tích tỳ chỉ làm hai người tự đoán sai." },
  { tag: "Ứng xử", q: "Crush từ chối lời tỏ tình của bạn, bạn xử lý thế nào?", a: "Nhận lịch sự: \"Cảm ơn vì đã nói thật\", giữ khoảng cách một thời gian cho cảm xúc nguội. Bám theo \"làm bạn rồi tính\" thường làm cả hai mệt." },
  { tag: "Ứng xử", q: "Bạn phát hiện người yêu nhắn tin thả thính người khác, bạn đối diện thế nào?", a: "Đưa bằng chứng, hỏi rõ ý định — định nghĩa ranh giới của hai người. Tranh cãi theo kiểu chất vấn rồi gào khóc thường không ra thông tin." },
  { tag: "Ứng xử", q: "Hẹn hò mà ai trả tiền? Bạn xử lý thế nào lần đầu?", a: "Người rủ trả, hoặc chia theo khả năng. Chủ động hỏi trước khi đi tránh lúc thanh toán kỳ kèo — cuối bữa mới bàn là xấu hổ nhất." },
  { tag: "Ứng xử", q: "Người yêu ghen không cho bạn gặp bạn thân khác giới, bạn đồng ý hay nói chuyện?", a: "Nói chuyện về ranh giới: tin cậy là nền tảng, cắt đứt bạn bè vì ghen là tín hiệu kiểm soát không lành mạnh." },
  { tag: "Ứng xử", q: "Cãi nhau với người yêu lúc khuya, bạn tiếp tục tranh luận hay dừng?", a: "Dừng, hẹn sáng nói: \"Giờ này mình đều mệt, sáng nói tiếp nha\". Sau 23h, mọi câu thoại đều có nguy cơ trở thành vũ khí." },

  // ---------------- Giao thông ----------------
  { tag: "Giao thông", q: "Xe sau bấm còi liên tục khi bạn đi đúng tốc độ, bạn xử lý thế nào?", a: "Giữ làn, giữ tốc độ hợp luật; nếu tiện, nhường làn trái khi an toàn. Tăng tốc theo sức ép là nguyên nhân tai nạn phổ biến." },
  { tag: "Giao thông", q: "Thấy xe phía trước nhường đường cho người đi bộ, bạn làm gì?", a: "Dừng chờ theo — không vượt qua bên phải để qua luôn; người đi bộ có quyền qua trước khi vạch trắng bật sáng cho xe." },
  { tag: "Giao thông", q: "Bị va quẹt nhẹ và hai bên cãi nhau về lỗi, bạn làm gì đầu tiên?", a: "An toàn trước: tấp lề, bật báo hiệu. Chụp ảnh hiện trường rồi thương lượng; không dàn xếp giữa đường đông xe." },
  { tag: "Giao thông", q: "Đèn vừa chuyển đỏ và bạn còn nửa xe, bạn làm gì?", a: "Đi tiếp qua ngã tư an toàn (đã vào vạch trước khi đỏ); nếu chưa vào vạch thì dừng. Lùi xe khi đèn đỏ dễ va chạm hơn." },
  { tag: "Giao thông", q: "Người đi bộ băng đường không vạch kẻ, bạn lái xe xử lý thế nào?", a: "Giảm tốc độ và nhường — dù người đi bộ sai, xe đụng người thì người là người thiệt. An toàn trên luật hóa." },
  { tag: "Giao thông", q: "Taxi/xe công nghệ đi đường dài hơn cần thiết, bạn phản ứng thế nào?", a: "Bình tĩnh hỏi: \"Sao mình đi đường này ạ?\" — nếu vô tình, họ sẽ giải thích; cố tình thì chụp hành trình và phản hồi app." },

  // ---------------- An toàn & khẩn cấp ----------------
  { tag: "An toàn", q: "Ngửi thấy mùi khí gas trong nhà, việc đầu tiên bạn làm là gì?", a: "Không bật/tắt công tắc điện, không bật lửa: mở cửa sổ, khóa van gas, rời nhà rồi mới gọi điện báo." },
  { tag: "An toàn", q: "Chảo dầu bắt lửa trên bếp, bạn dập bằng gì?", a: "Đậy nắp chảo hoặc khăn ướt để cắt oxy, tắt bếp. Tuyệt đối không dội nước — nước làm dầu bắn và lửa lan." },
  { tag: "An toàn", q: "Bị điện giật người khác đang dính vào thiết bị, bạn làm gì?", a: "Ngắt cầu dao/rút phích cắm trước; không chạm trực tiếp vào người bị giật bằng tay trần. Dùng vật cách điện đẩy dây ra nếu cần." },
  { tag: "An toàn", q: "Động đất nhẹ khi bạn ở trong nhà cao tầng, bạn làm gì?", a: "Nằm xuống dưới bàn chắc chắn hoặc che đầu gần cột, tránh cửa kính; không chạy thang bộ trong lúc rung, chờ ngừng rồi đi thang bộ." },
  { tag: "An toàn", q: "Người lạ gọi điện tự xưng ngân hàng xin mã OTP, bạn làm gì?", a: "Cúp máy — ngân hàng thật không bao giờ xin OTP. Gọi lại số chính thức trên website nếu cần xác minh." },
  { tag: "An toàn", q: "Bạn phát hiện tài khoản mạng xã hội bị chiếm quyền, bạn làm gì đầu tiên?", a: "Đổi mật khẩu email gốc trước (email là cửa phục hồi), bật xác minh 2 lớp, báo quản trị viên để khóa phiên đăng nhập lạ." },

  // ---------------- Tiêu dùng ----------------
  { tag: "Tiêu dùng", q: "Mua hàng online nhận về khác mô tả, bạn xử lý thế nào?", a: "Quay video mở hộp là bằng chứng; liên hệ shop trong thời gian bảo hành nền tảng, yêu cầu đổi/trả trước khi đánh giá." },
  { tag: "Tiêu dùng", q: "Quán tính tiền thừa 50 nghìn, bạn làm gì?", a: "Chỉ ra hóa đơn lịch sự: \"Bên mình kiểm tra lại giúp em\". Nhầm thì hoàn tiền, cố tình thì đánh giá trung thực là đủ." },
  { tag: "Tiêu dùng", q: "Nhân viên bán hàng ép bạn mua gói bảo hành mở rộng, bạn từ chối thế nào?", a: "\"Để mình cân nhắc ạ\" là câu chốt đủ dùng — không cần giải thích dài; bảo hành mở rộng đáng mua với thiết bị đắt, không đáng với đồ rẻ." },
  { tag: "Tiêu dùng", q: "Bạn nhận được hàng nhưng shop gửi nhầm món đắt hơn, bạn giữ lại hay trả?", a: "Trả — giữ đồ của người khác là bất hợp pháp và gây phiền về sau; liên hệ shop, họ thường cảm ơn và gửi đúng món." },

  // ---------------- Học tập ----------------
  { tag: "Học tập", q: "Bài kiểm tra quan trọng ngày mai mà bạn chưa học, bạn thức trắng hay ngủ đủ?", a: "Học các ý chính 1-2 giờ, ngủ đủ 6-7 tiếng — não cần ngủ để ghi nhớ; thức trắng làm bạn quên ngay giữa buổi thi." },
  { tag: "Học tập", q: "Bạn thấy bạn cùng lớp quay có bài kiểm tra, bạn xử lý thế nào?", a: "Không tham gia, không cần tố ngay trước lớp; nếu thi cử ảnh hưởng xếp loại chung, nhắc riêng hoặc báo giáo viên sau." },
  { tag: "Học tập", q: "Giáo viên chấm sai điểm cao hơn thực tế cho bạn, bạn làm gì?", a: "Báo để sửa — điểm sai cao hôm nay là điểm lộ liễu sau này; trung thực về học vấn xây nền cho chính bạn." },
  { tag: "Học tập", q: "Bạn hiểu bài nhưng nói không trôi khi thuyết trình, bạn chuẩn bị thế nào lần sau?", a: "Tập nói thành tiếng ít nhất 3 lần trước gương/quay video — hiểu trong đầu và nói ra thành câu là hai kỹ năng khác nhau." },
];
