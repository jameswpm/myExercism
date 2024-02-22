//Solution goes in Sources

func append(_ a :[Int],_ b :[Int]) -> [Int] {
    let a_size : Int = a.count
    let b_size : Int = b.count

    var result: [Int] = []

    if (a_size != 0) {
        for index in 0...a_size - 1 {
            result.append(a[index])
        }
    }

    if (b_size != 0) {
        for index in 0...b_size - 1 {
            result.append(b[index])
        }
    }

    return result
}

func concat(_ lists: [Int]...) -> [Int] {
    let lists_size : Int = lists.count
    var result: [Int] = []

    for index in 0...lists_size - 1 {
        result = ListOps.append(result, lists[index])

    }
    return result
}

func filter(_ a :[Int], _ by: (Int) -> Bool) -> [Int] {
    let a_size : Int = a.count

    var result: [Int] = []

    if (a_size == 0) {
        return result
    }

    for index in 0...a_size - 1  {
        if (by(a[index])) {
            result.append(a[index])
        }
    }

    return result
}

func length(_ a :[Int]) -> Int {
    var counter : Int = 0

    for _ in a {
        counter += 1
    }

    return counter
}

func map(_ a :[Int], _ function: (Int) -> Int) -> [Int] {
    let a_size : Int = a.count

    var result: [Int] = []

    if (a_size == 0) {
        return result
    }

    for index in 0...a_size - 1 {        
        result.append(function(a[index]))        
    }

    return result
}

func foldLeft(_ a :[Int], accumulated :Int, combine function: (Int, Int) -> Int) -> Int {
    let a_size : Int = a.count

    var fin = accumulated

    if (a_size == 0) {
        return fin
    }

    for index in 0...a_size - 1 {
        fin = function(fin, a[index])
    }

    return fin
}

func foldRight<T>(_ a: [T], accumulated: T, combine function: (T, T) -> T) -> T {
    let a_size : Int = a.count

    var fin = accumulated

    if (a_size == 0) {
        return fin
    }

    for index in stride(from: a_size - 1, to: -1, by: -1) {
        fin = function(a[index], fin)
    }

    return fin
}

func reverse(_ a: [Int]) -> [Int] {
    let a_size : Int = a.count

    var result : [Int] = []

    if (a_size == 0) {
        return result
    }

    for index in stride(from: a_size - 1, to: -1, by: -1) {
        result.append(a[index])
    }

    return result
}
