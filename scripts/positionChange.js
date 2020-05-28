
$(function () {
    var messages = [],
        index = 0;

    messages.push('Integration Developer');
    messages.push('.NET Developer');
    messages.push('Front-end Developer');

    function cycle() {
        $('#position').html(messages[index]);
        index++;

        if (index === messages.length) {
            index = 0;
        }

        setTimeout(cycle, 1000);
    }

    cycle();
});
