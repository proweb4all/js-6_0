function func(a, b){
    let angleA = 360 * ((a % 12) + (b % 60) / 60) / 12,
        angleB = 360 * (b % 60) / 60,
        angleAB = Math.abs(angleA - angleB) % 360;
    if (angleAB > 180) angleAB = 360 - angleAB;
    console.log(`(${a}, ${b}), (${angleA}, ${angleB}) ==> ${angleAB}`);
  };
  func(3, 10);
