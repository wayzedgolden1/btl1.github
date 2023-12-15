function tinhtoan() {

        const thang = parseFloat(document.getElementById('thang').value) || 0;
        const dotxuat = parseFloat(document.getElementById('dotxuat').value) || 0;
        const chitieu = parseFloat(document.getElementById('chitieu').value) || 0;



        const ketqua = thang + dotxuat - chitieu;


        document.getElementById('ketqua').textContent = `Số dư tài khoản mùa này là : ${ketqua}`};

function dangnhap() {

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;


      if (username === 'hoanhoan' && password === 'hoanhoan') {
        alert('Đăng nhập thành công!');

        document.getElementById('<a href="btltrangtinh.html"></a>').style.display = 'none';

      } else {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên người dùng và mật khẩu.');
      }
}
function dangky(){
        $.ajax({
                url:'https://655645f084b36e3a431f7ea2.mockapi.io/api/v1/taikhoan' + id,
                type: 'DELETE',
                success: function(result) {
                $('#comment-' + id).remove();
                }
                });
        alert('Bạn đã đăng ký thành công!');        
}
