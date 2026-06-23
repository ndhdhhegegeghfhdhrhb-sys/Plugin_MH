// Отправляем запрос на получение текущего статуса в main процесс
window.electronAPI.sendPluginStatus({ action: 'getStatus' });

// Обработчик обновления статуса от основного приложения
window.electronAPI.onPluginStatusUpdate((status) => {
    console.log('📊 Получен статус:', status);
    document.getElementById('track-title').textContent = status.title || 'Не играет';
    document.getElementById('track-artist').textContent = status.artist || '—';
    document.getElementById('play-status').textContent = status.isPlaying ? '▶️ Воспроизводится' : '⏸️ На паузе';
    document.getElementById('volume-display').textContent = `🔊 Громкость: ${Math.round(status.volume * 100)}%`;
});

// Обработчик для кнопки закрытия
document.getElementById('close-btn').addEventListener('click', () => {
    window.close();
});

console.log('✅ Плагин Simple Info загружен!');
