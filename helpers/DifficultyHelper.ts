export const renderStars = (difficulty) => {
    let stars = [];
    for (let i = 0; i < difficulty; i++) {
      stars.push("★");
    }
    return stars.join("");
  };