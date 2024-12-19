// Danh sách các bài blog mặc định
const defaultBlogs = [
    { 
        title: 'Phở Bò - Hương Vị Quê Nhà', 
        content: 'Phở bò là món ăn truyền thống nổi tiếng của Việt Nam, được nhiều người yêu thích bởi hương vị đậm đà và thơm ngon. Món phở bò không chỉ là bữa sáng lý tưởng mà còn là bữa trưa hoặc tối tuyệt vời cho mọi người. \n\nNguyên liệu bao gồm bánh phở, thịt bò (thịt nạc, gân, nạm), xương bò, hành tây, gừng, hành lá, rau thơm, và các gia vị như nước mắm, muối, đường, hạt nêm, tiêu, hoa hồi, quế, đinh hương. \n\nQuá trình nấu phở bò đòi hỏi sự tỉ mỉ và kiên nhẫn. Xương bò cần được hầm kỹ cùng với hành tây, gừng, hoa hồi, và quế để tạo nên hương vị đậm đà. Thịt bò được thái mỏng, bánh phở trụng qua nước sôi, và không thể thiếu những cọng hành lá tươi xanh. \n\nThưởng thức một tô phở bò nóng hổi vào buổi sáng mang lại cảm giác thật tuyệt vời. Hương thơm của nước dùng lan tỏa, từng miếng thịt bò mềm mại, bánh phở dai dai hòa quyện với hành lá, rau thơm tạo nên một bữa ăn đậm đà. Phở bò không chỉ là món ăn, mà còn là một phần ký ức và tình cảm với quê hương.', 
        image: 'images/pho.jpg' 
    },
    { 
        title: 'Sushi Nhật Bản - Nghệ Thuật Ẩm Thực', 
        content: 'Sushi là món ăn truyền thống của Nhật Bản, nổi tiếng với sự tinh tế và đẹp mắt. Món sushi không chỉ là một bữa ăn ngon mà còn là một tác phẩm nghệ thuật đích thực. \n\nNguyên liệu gồm có gạo sushi, rong biển, các loại hải sản tươi sống như cá hồi, cá ngừ, tôm, và các loại rau củ như dưa chuột, bơ. Để làm sushi, trước tiên bạn cần nấu gạo sushi và trộn đều với giấm sushi, đường, muối. \n\nViệc cuộn sushi đòi hỏi kỹ năng, nhưng điều thú vị là quá trình này giúp tôi thư giãn và tập trung. Mỗi miếng sushi là một tác phẩm nghệ thuật nhỏ. Khi thưởng thức sushi, tôi cảm nhận được sự tươi ngon của hải sản kết hợp với vị dẻo của gạo và giòn của rau củ. Sushi không chỉ là món ăn, mà còn là một nghệ thuật ẩm thực đặc sắc của Nhật Bản.', 
        image: 'images/sushi1.jpg' 
    },
    { 
        title: 'Tacos Mexico - Sự Kết Hợp Hoàn Hảo', 
        content: 'Tacos là món ăn đường phố nổi tiếng của Mexico, với sự kết hợp hoàn hảo giữa vỏ bánh mềm và nhân đa dạng. Món ăn này thích hợp cho những bữa tiệc hoặc các bữa ăn nhanh. \n\nNguyên liệu bao gồm vỏ bánh tacos, thịt bò, thịt gà, hoặc thịt heo, hành tây, cà chua, rau sống, phô mai, và các gia vị như tỏi, ớt, tiêu, nước chanh. \n\nQuá trình làm tacos bắt đầu với việc nấu chín thịt với tỏi, ớt, tiêu, và nước chanh. Sau đó, chuẩn bị vỏ bánh tacos nướng nhẹ cho giòn. Hoàn thiện món ăn bằng cách xếp nhân thịt vào vỏ bánh, thêm hành tây, cà chua, rau sống, và phô mai. Tacos ngon nhất khi ăn nóng, kèm theo sốt salsa và chanh.', 
        image: 'images/tacos1.jpg' 
    },

];

// Hiển thị các bài blog mặc định
defaultBlogs.forEach(blog => {
    createPost(blog.title, blog.content, blog.image);
});

// Hàm tạo bài blog
function createPost(title, content, image) {
    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.innerText = title;

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    
    const postParagraph = document.createElement('p');
    postParagraph.innerText = content;
    postContent.appendChild(postParagraph);
    
    const postTime = document.createElement('p');
    postTime.classList.add('post-time');
    postTime.innerText = formatDate(new Date());
    post.appendChild(postTime);

    post.appendChild(postTitle);
    post.appendChild(postContent);

    if (image) {
        const postImage = document.createElement('img');
        postImage.src = image;
        postImage.classList.add('post-image');
        post.appendChild(postImage);
    }

    const postsContainer = document.getElementById('posts');
    if (postsContainer.firstChild) {
        postsContainer.insertBefore(post, postsContainer.firstChild);
    } else {
        postsContainer.appendChild(post);
    }
}
// Hàm ngày giờ
function formatDate(date) {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Xử lý sự kiện khi gửi biểu mẫu
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image-file').files[0];

    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.innerText = title;

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    
    const postParagraph = document.createElement('p');
    postParagraph.innerText = content;
    postContent.appendChild(postParagraph);
    const postTime = document.createElement('p'); 
    postTime.classList.add('post-time'); 
    postTime.innerText = formatDate(new Date()); 
    post.appendChild(postTime); 
    post.appendChild(postTitle); 
    post.appendChild(postContent);

    post.appendChild(postTitle);
    post.appendChild(postContent);

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const postImage = document.createElement('img');
            postImage.src = e.target.result;
            postImage.classList.add('post-image');
            post.appendChild(postImage);
        }
        reader.readAsDataURL(imageFile);
    }

    const postsContainer = document.getElementById('posts');
    if (postsContainer.firstChild) {
        postsContainer.insertBefore(post, postsContainer.firstChild);
    } else {
        postsContainer.appendChild(post);
    }

    document.getElementById('post-form').reset();
});



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       

  