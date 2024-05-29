export async function showTooltip(event, msg, isBookmarkElemets) {
    let tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = msg;
    document.body.appendChild(tooltip);

    // ツールチップをマウスの位置に配置
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';

    // ツールチップを一時的に表示
    tooltip.classList.add('show');

    if (!isBookmarkElemets) {
        // 一定時間後にツールチップを削除
        setTimeout(function () {
            tooltip.remove();
        }, 300);
    } else {
        // ブックマークの場合はマウスが離れるまでツールチップを表示
        event.target.addEventListener('mouseleave', function () {
            tooltip.remove();
        });
    }

}