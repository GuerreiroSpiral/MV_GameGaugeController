/*=======================================================================================
/* GameGaugeController.js
/* by: Spiral Warrior
/* Date: 30/12/2019
//=======================================================================================

/*:
 * @plugindesc Script simples que permite a alteração das cores das gauges de HP, MP e TP.
 * @author Spiral Warrior
 * 
 * @param HP Color 1
 * @default 1
 * 
 * @param HP Color 2
 * @default 9
 * 
 * @param MP Color 1
 * @default 10
 * 
 * @param MP Color 2
 * @default 18
 * 
 * @param TP Color 1
 * @default 6
 * 
 * @param TP Color 2
 * @default 14
 * 
 * @help As cores são dadas pelo arquivo de Windowskin do seu projeto. 
 */

 (function () {
     //Alterar a partir daqui pode ser possivelmente perigoso. Tenha certeza que sabe o que está fazendo.

     var parameters = PluginManager.parameters('GameGaugeController');
     
     var hpColor1 = Number(parameters['HP Color 1']);
     var hpColor2 = Number(parameters['HP Color 2']);
     var mpColor1 = Number(parameters['MP Color 1']);
     var mpColor2 = Number(parameters['MP Color 2']);
     var tpColor1 = Number(parameters['TP Color 1']);
     var tpColor2 = Number(parameters['TP Color 2']);
    
    //HP
    Window_Base.prototype.hpGaugeColor1 = function() {
        return this.textColor(hpColor1);
    };
    
    Window_Base.prototype.hpGaugeColor2 = function() {
        return this.textColor(hpColor1);
    };

    //MP
    Window_Base.prototype.mpGaugeColor1 = function() {
        return this.textColor(mpColor1);
    };
    
    Window_Base.prototype.mpGaugeColor2 = function() {
        return this.textColor(mpColor2);
    };

    Window_Base.prototype.tpGaugeColor1 = function() {
        return this.textColor(tpColor1);
    };

    Window_Base.prototype.tpGaugeColor2 = function() {
        return this.textColor(tpColor2);
    };
    

 })();