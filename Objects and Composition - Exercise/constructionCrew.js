function constructionCrew(worker) {
    if (worker.dizziness === true) {
        let sum = worker.weight * worker.experience * 0.1
        worker.levelOfHydrated += sum
        worker.dizziness = false
    }
    return worker
}
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})