Ext.define('MCLM.view.trabalho.TrabalhoTree', {
	extend: 'Ext.tree.TreePanel',
	xtype: 'view.trabalhoTree',
	id: 'trabalhoTree',
    
    store: 'store.trabalhoTree',
    rootVisible: true,
    animate : false,
	requires: [
	   'MCLM.view.trabalho.TrabalhoTreeController'
	],     
	
	controller : 'trabalho',
    
    scrollable: true,
    scroll: 'both',

    viewConfig: {
    	markDirty:false,
    	id:'trabalhoTreeView',
        plugins: {
            ptype: 'treeviewdragdrop'
        },
        listeners: {       
        	drop: function (node, data, overModel, dropPosition) {
        		// interceptado pelo controller 'MCLM.view.trabalho.TrabalhoTreeController'
        	},
        } 
    },        
    useArrows: true,
    border:false,
    frame : false,
    
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
        	iconCls: 'reload-icon',
        	id: 'id802',
            handler : 'clearWorkspace'
        },{
        	xtype: 'tbseparator'
        },{
        	iconCls: 'save-icon',
        	id: 'id800',
            handler : 'saveScenery'
        },{
        	iconCls: 'copy-icon',
        	id: 'id803',
        	disabled:true,
            handler : 'cloneScenery'
        },{
        	xtype: 'tbseparator'
        },{
        	iconCls: 'scenery-icon',
        	id: 'id801',
            handler : 'loadScenery'
        }]
    }],
        
    
    listeners: {
    
    	itemclick: 'onLayerTreeItemClick',
        checkchange: 'onLayerTreeCheckChange',
        itemcontextmenu: 'onContextMenu',
        viewready: 'viewready',
		afterrender:function(){
			
		    Ext.tip.QuickTipManager.register({
		        target: 'id800',
		        title: 'Salvar',
		        text: 'Salva o conteúdo da área de trabalho / Cenário.',
		        width: 150,
		        dismissDelay: 5000 
		    }, {
		        target: 'id801',
		        title: 'Gerenciar Cenários',
		        text: 'Gerencia os Cenários (carregar, apagar, tornar público ou privado).',
		        width: 150,
		        dismissDelay: 5000 
		    }, {
		        target: 'id802',
		        title: 'Limpar Área de trabalho',
		        text: 'Limpa a Área de Trabalho. As modificações não gravadas no cenário atual serão perdidas.',
		        width: 150,
		        dismissDelay: 5000 
		    }, {
		        target: 'id803',
		        title: 'Salvar Cenário como...',
		        text: 'Salva uma cópia do Cenário atual.',
		        width: 150,
		        dismissDelay: 5000 
		    });			
			
		},
    	load:'onLoadNode'
        
    }      
    
    
});