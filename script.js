document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单默认提交行为
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '123456') { // 假设正确的用户名和密码
        alert('登录成功！');
        window.location.href = 'content.html'; // 登录成功后跳转到内容页面
    } else {
        alert('用户名或密码错误，请重试！');
    }
});