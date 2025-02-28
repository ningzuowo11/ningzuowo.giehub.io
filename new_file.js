document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止默认表单提交

    // 获取表单数据
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // 简单验证
    if (name && email && message) {
        alert('表单已提交！');
        this.reset(); // 清空表单
    } else {
        alert('请填写所有字段！');
    }
});