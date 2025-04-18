// 目標をローカルストレージに保存する関数
function saveGoal(newGoal) {
    // ローカルストレージから既存のデータを取得
    let goals = JSON.parse(localStorage.getItem('goals')) || [];

    // 新しい目標を追加
    goals.push(newGoal);

    // ローカルストレージに保存
    localStorage.setItem('goals', JSON.stringify(goals));
    console.log('目標が保存されました:', newGoal);
}

// 目標をローカルストレージから読み込む関数
function loadGoals() {
    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    console.log('読み込まれた目標:', goals);
    return goals;
}

// 使用例
document.getElementById('goal-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const goalInput = document.getElementById('goal');
    const goalTitle = goalInput.value.trim();

    if (!goalTitle) {
        alert('目標を入力してください');
        return;
    }

    const newGoal = {
        id: Date.now(),
        title: goalTitle
    };

    saveGoal(newGoal);
    goalInput.value = '';
    alert('目標が保存されました！');
});