export async function showCopyTooltip(event) {
    let tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = 'Copied!';
    document.body.appendChild(tooltip);

    // ツールチップをマウスの位置に配置
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';

    // ツールチップを一時的に表示
    tooltip.classList.add('show');

    // 一定時間後にツールチップを削除
    setTimeout(function () {
        tooltip.remove();
    }, 300);
}