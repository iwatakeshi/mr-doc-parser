import { NodeProperties } from "../../common/emca";
import { SyntaxNode } from "tree-sitter";
import Source from "../../../interfaces/Source";
import { ASTNode } from "../../common/ast";
export interface TreeSitterNode {
    visit(visitor: NodeVisitor): void;
}
export interface NodeVisitor {
    getAST(): ASTNode[];
    visitNode(node: SyntaxNode): ASTNode;
    visitChildren(nodes: SyntaxNode[]): ASTNode[];
}
export declare class Node implements TreeSitterNode {
    syntaxNode: SyntaxNode;
    constructor(syntaxNode: SyntaxNode);
    visit: (visitor: NodeVisitor) => void;
}
export declare class TypeScriptVisitor implements NodeVisitor {
    private ast;
    private source;
    private parent;
    constructor(source: Source);
    /**
     * Determines whether a node has inheritance
     */
    private hasInheritance;
    /**
     * Returns a node's inheritance type
     */
    private getInheritanceType;
    private filterComments;
    getAST(): ASTNode[];
    visitNode: (node: SyntaxNode) => ASTNode;
    visitChildren: (nodes: SyntaxNode[]) => ASTNode[];
    visitProgram: (node: SyntaxNode) => ASTNode[];
    visitComment: (node: SyntaxNode) => ASTNode;
    visitContext: (node: SyntaxNode, properties?: Partial<NodeProperties>) => ASTNode;
    visitInterfaceDeclaration: (node: SyntaxNode, properties?: Partial<NodeProperties>) => ASTNode;
    visitInterface: (node: SyntaxNode, properties?: Partial<NodeProperties>) => ASTNode;
    visitSignature: (node: SyntaxNode, properties?: Partial<NodeProperties>) => ASTNode;
    visitTypeNode: (node: SyntaxNode) => ASTNode;
    visitConstraint: (node: SyntaxNode) => ASTNode;
    visitInheritanceClause: (node: SyntaxNode) => ASTNode;
    visitTerminal: (node: SyntaxNode) => ASTNode;
}
