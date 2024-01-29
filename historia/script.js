function HistoricalRelationship(LeonTolstoy, SofiaTolstaya) {
    LeonTolstoy.spouse = SofiaTolstaya;
    SofiaTolstaya.spouse = LeonTolstoy;
  
    return {
        LeoTolstoy: LeonTolstoy,
        SofiaTolstaya: SofiaTolstaya,
    };
  }
  
  let writingCouple = HistoricalRelationship(
    { name: "Leon Tolstoy" },
    { name: "Sofia Tolstaya" }
  );
  
  console.log(writingCouple.LeoTolstoy.spouse.name);
  
  delete writingCouple.SofiaTolstaya;
  console.log(historicalCouple.SofiaTolstaya);
  
  delete writingCouple.LeonTolstoy.spouse;
  console.log(historicalCouple.LeonTolstoy.spouse); 
  
  console.log("objeto es"+writingCouple)
  
  if (require.writingCouple === module) {
    historicalCouple();
  }
  