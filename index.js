// array of banner images in /html/img/banner
image_array = [
    'AguraBanner.gif',
    'AppleBanner.gif',
    'MSIEBanner.gif',
    'RockwellBanner.gif'
]

function get_ranmdom_image(){
    // get image from array
    random_index = Math.floor(Math.random() * image_array.length);

    // get image at random_index
    selected_image = image_array[random_index]

    // display image as selected_image
    document.getElementById('image_bannerad').src = './html/img/banner/${selected_image}'
}
