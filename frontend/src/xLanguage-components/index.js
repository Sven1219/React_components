import React, { useState, useEffect, useRef } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Helmet} from "react-helmet";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";

import "prismjs/themes/prism.css";
import * as THREE from "three";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const code = `PRINT("Greetings universe!")\n变量 a = [1,2,3] \n变量 b = ["a","b","c"] \n
变量 c = [a,b] \n循环从 i = 0 到 LEN(c) 那么 \n  循环从 j = 0 到 LEN(c->i) 那么 \n    PRINT(c->i->j) \n  结束 \n结束`;

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span className='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");





function XLanguageDisplay() {
  const [output,setOutput] = useState("程序输出：");
  
  const [codeValue, setCodeValue] = useState(code);
  

function _0x315a()
{var _0x56f610=['idx','1338010xdAwjK','2316226VsYpRW','col','12UmaaPf','5KRZNpE','replace','878402DjBbSf','indexOf','2905029GikWRc','substring','250384PPNYJY','746982VJhunv','234cUmMKk','length','lastIndexOf','854AqbazT','8GKyaPy'];_0x315a=function(){return _0x56f610;};return _0x315a();}

function _0x2d4b(_0x2769a3,_0x26604d){var _0x315a5d=_0x315a();return _0x2d4b=function(_0x2d4b77,_0x444c35){_0x2d4b77=_0x2d4b77-0x157;var _0x3bf80f=_0x315a5d[_0x2d4b77];return _0x3bf80f;},_0x2d4b(_0x2769a3,_0x26604d);}

(function(_0x6fe0ed,_0x264ab5){var _0x9e1206=_0x2d4b,_0x1f1364=_0x6fe0ed();while(!![]){try{var _0x50db34=-parseInt(_0x9e1206(0x165))/0x1*(parseInt(_0x9e1206(0x162))/0x2)+parseInt(_0x9e1206(0x161))/0x3+-parseInt(_0x9e1206(0x160))/0x4*(parseInt(_0x9e1206(0x15a))/0x5)+parseInt(_0x9e1206(0x159))/0x6*(-parseInt(_0x9e1206(0x15c))/0x7)+parseInt(_0x9e1206(0x166))/0x8*(parseInt(_0x9e1206(0x15e))/0x9)+-parseInt(_0x9e1206(0x168))/0xa+parseInt(_0x9e1206(0x157))/0xb;if(_0x50db34===_0x264ab5)break;else _0x1f1364['push'](_0x1f1364['shift']());}catch(_0xce8acf){_0x1f1364['push'](_0x1f1364['shift']());}}}(_0x315a,0x3962e));

function string_with_arrows(_0x2b3ddc,_0x4ffdcc,_0xe0e895){

var _0xe38c90=_0x2d4b,_0x34278a='',_0x20c686=_0x2b3ddc[_0xe38c90(0x15f)](0x0,_0x4ffdcc['idx']),_0x4c39d2=Math['max'](_0x20c686[_0xe38c90(0x164)]('\x0a'),0x0),_0x2f47c2=_0xe0e895['ln']-_0x4ffdcc['ln']+0x1,_0x2f91c0=_0x2b3ddc['substring'](_0xe0e895[_0xe38c90(0x167)]),_0x5687ec=_0x2f91c0[_0xe38c90(0x15d)]('\x0a')+_0xe0e895[_0xe38c90(0x167)];_0x2f91c0[_0xe38c90(0x15d)]('\x0a')<0x0&&(_0x5687ec=_0x2b3ddc[_0xe38c90(0x163)]);for(let _0x455af8=0x0;_0x455af8<_0x2f47c2;_0x455af8++){var _0x1a7e8f=_0x2b3ddc['slice'](_0x4c39d2,_0x5687ec),_0x49b792;_0x455af8==0x0?_0x49b792=_0x4ffdcc[_0xe38c90(0x158)]:_0x49b792=0x0;var _0x2a7c7d;_0x455af8==_0x2f47c2-0x1?_0x2a7c7d=_0xe0e895[_0xe38c90(0x158)]:_0x2a7c7d=_0x1a7e8f[_0xe38c90(0x163)]-0x1;_0x34278a+=_0x1a7e8f+'\x0a';for(let _0x57dc20=0x0;_0x57dc20<_0x49b792;_0x57dc20++){_0x34278a+='\x20';}for(let _0x2a6d73=0x0;_0x2a6d73<_0x2a7c7d-_0x49b792;_0x2a6d73++){_0x34278a+='^';}var _0x4c39d2=_0x5687ec,_0x2f91c0=_0x2b3ddc[_0xe38c90(0x15f)](_0x4c39d2+0x1),_0x5687ec=_0x2f91c0[_0xe38c90(0x15d)]('\x0a')+_0x4c39d2+0x1;_0x2f91c0['indexOf']('\x0a')<0x0&&(_0x5687ec=_0x2b3ddc[_0xe38c90(0x163)]);}return _0x34278a[_0xe38c90(0x15b)]('\x09','');

}
//*/

//#######################################
//# CONSTANTS
//#######################################

const DIGITS = '0123456789'
const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + "绝对如果那么变量其他情况另外定义函数结束循环从到返回当步长从新循环结束循环"
const LETTERS_DIGITS = LETTERS + DIGITS


//#######################################
//# ERRORS
//#######################################

class Error
{
  constructor(pos_start, pos_end, error_name, details)
  {
    this.pos_start = pos_start;
    this.pos_end = pos_end;
    this.error_name = error_name;
    this.details = details;
    this.class_name = "Error"
  }
  
  
  
  as_string()
  {
     let result  = this.error_name + ":" + this.details+"\n";
    result += '文件 ' + this.pos_start.fn + ',' + '行数 ' + (this.pos_start.ln + 1).toString();
    result += '\n\n' + string_with_arrows(this.pos_start.ftxt, this.pos_start, this.pos_end);
    return result
  }
}

class IllegalCharError extends Error
{
  constructor(pos_start, pos_end, details)
  {
    super(pos_start, pos_end, '出现错误:错误的字符', details)
    this.class_name = "IllegalCharError"
  }
}
class ExpectedCharError extends Error
{
  constructor( pos_start, pos_end, details)
  {
    super(pos_start, pos_end, '出现错误:期望输入字符', details)
    this.class_name = "ExpectedCharError"
  }
}

class InvalidSyntaxError extends Error
{
  constructor( pos_start, pos_end, details='')
  {
    super(pos_start, pos_end, '出现错误:错误的语法', details)
    this.class_name = "InvalidSyntaxError"
  }
}

class RTError extends Error
{
  constructor( pos_start, pos_end, details, context)
  {
    super(pos_start, pos_end, '出现错误:运行时错误', details)
    this.context = context
    this.class_name = "RTError"
  }

  as_string()
  {
    let result  = this.generate_traceback();
    result += this.error_name + ":" + this.details;
    result += '\n\n' + string_with_arrows(this.pos_start.ftxt, this.pos_start, this.pos_end);
    return result
  }

  generate_traceback()
  {
    let result = '';
    let pos = this.pos_start
    let ctx = this.context

    while(ctx)
    {
      result = '  文件' + pos.fn + ',' + ' 行数 ' + (pos.ln + 1).toString() + ',' + ' 在 ' + ctx.display_name+'\n' + result
      pos = ctx.parent_entry_pos
      ctx = ctx.parent
    }
    
    return '\n回溯 ( 最近一次运行时 ):\n' + result
  }
}


//#######################################
//# POSITION
//#######################################


class Position
{
  constructor(idx, ln, col, fn, ftxt)
  {
    this.idx = idx;
    
    if(ln == 0)
    {
      this.ln = 1;
    }
    else
    {
      this.ln = ln;
    }
    
    this.col = col;
    this.fn = fn;
    this.ftxt = ftxt;
    this.class_name = "Position"
  }

  advance(current_char=null)
  {
    this.idx += 1;
    this.col += 1;

    if(current_char == '\n')
    {
      this.ln += 1;
      this.col = 0;
    }
    
    return this
  }

  copy()
  {
    return new Position(this.idx, this.ln, this.col, this.fn, this.ftxt)
  }
}

//*/


//#######################################
//# TOKENS
//#######################################

const TT_INT        = 'INT'
const TT_FLOAT          = 'FLOAT'
const TT_STRING     = 'STRING'
const TT_IDENTIFIER     = 'IDENTIFIER'
const TT_KEYWORD      = 'KEYWORD'
const TT_PLUS           = 'PLUS'
const TT_MINUS          = 'MINUS'
const TT_MUL            = 'MUL'
const TT_DIV            = 'DIV'
const TT_POW        = 'POW'
const TT_EQ         = 'EQ'
const TT_LPAREN         = 'LPAREN'
const TT_RPAREN         = 'RPAREN'
const TT_LSQUARE          = 'LSQUARE'
const TT_RSQUARE          = 'RSQUARE'
const TT_EE         = 'EE'
const TT_NE         = 'NE'
const TT_LT         = 'LT'
const TT_GT         = 'GT'
const TT_LTE        = 'LTE'
const TT_GTE        = 'GTE'
const TT_COMMA        = 'COMMA'
const TT_ARROW        = 'ARROW'
const TT_NEWLINE      = 'NEWLINE'
const TT_EOF        = 'EOF'

const KEYWORDS = [
  '变量',
  'AND',
  'OR',
  'NOT',
  '绝对如果',
  '另外如果',
  '其他情况',
  '循环从',
  '到',
  '步长',
  '循环当',
  '定义函数',
  '那么',
  '结束',
  '函数返回',
  '从新循环',
  '结束循环',
]


class Token
{
  constructor(type_, value=null, pos_start=null, pos_end=null)
  {
    this.type = type_
    this.value = value
    this.class_name = "Token"

    if(pos_start)
    {
      this.pos_start = pos_start.copy()
      this.pos_end = pos_start.copy()
      this.pos_end.advance()
    }

    if(pos_end)
    {
      this.pos_end = pos_end.copy()
    }
  }

  matches(type_, value)
  {
    return this.type == type_ && this.value == value
  }
  
  repr()
  {
    if(this.value)
    {
      return this.type+':'+this.value
    }
    
    return this.type
  }
}


//#######################################
//# LEXER
//#######################################

class Lexer
{
  constructor(fn, text)
  {
    this.class_name = "Lexer"
    this.fn = fn
    this.text = text
    this.pos = new Position(-1, 0, -1, fn, text)
    this.current_char = null
    this.advance()
    
  }
  
  advance()
  {
    this.pos.advance(this.current_char)
    
    if(this.pos.idx < this.text.length)
    {
      this.current_char = this.text[this.pos.idx]; 
    }
    else
    {
      this.current_char = null;
    }
  }
  
  make_tokens()
  {
    let tokens = []
    let empty_tokens = [];

    while(this.current_char != null)
    {
      if( ' \t'.includes(this.current_char))
        this.advance()
      else if(this.current_char == '#')
        this.skip_comment()
      else if( ';\n'.includes(this.current_char))
      {
        tokens.push(new Token(TT_NEWLINE, null, this.pos, null))
        this.advance()
      }
      else if( DIGITS.includes(this.current_char))
        tokens.push(this.make_number())
      else if( LETTERS.includes(this.current_char))
        tokens.push(this.make_identifier())
      else if( this.current_char == '"')
        tokens.push(this.make_string())
      else if( this.current_char == '+')
      {
        tokens.push(new Token(TT_PLUS, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '-')
        tokens.push(this.make_minus_or_arrow())
      else if( this.current_char == '*')
      {
        tokens.push(new Token(TT_MUL, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '/')
      {
        tokens.push(new Token(TT_DIV, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '^')
      {
        tokens.push(new Token(TT_POW, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '(')
      {
        tokens.push(new Token(TT_LPAREN, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == ')')
      {
        tokens.push(new Token(TT_RPAREN, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '[')
      {
        tokens.push(new Token(TT_LSQUARE, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == ']')
      {
        tokens.push(new Token(TT_RSQUARE, null, this.pos, null))
        this.advance()
      }
      else if( this.current_char == '!')
      {
        let { token, error } = this.make_not_equals()
        
        if(error)
        {
           let token = empty_tokens;
           return { token, error }
        }
        tokens.push(token)
      }
      else if( this.current_char == '=')
        tokens.push(this.make_equals())
      else if( this.current_char == '<')
        tokens.push(this.make_less_than())
      else if( this.current_char == '>')
        tokens.push(this.make_greater_than())
      else if( this.current_char == ',')
      {
        tokens.push(new Token(TT_COMMA, null,this.pos, null))
        this.advance()
      }
      else
      {
        let pos_start = this.pos.copy()
        let char = this.current_char
        this.advance()
        let error = new IllegalCharError(pos_start, this.pos , "'" + char + "'") ;
        let token = empty_tokens;
        return { token, error }
      }
    }    

    tokens.push(new Token(TT_EOF, null, this.pos, null))
    let error = null;
    return { tokens, error }
  }

  make_number()
  {
    var num_str = ''
    var dot_count = 0
    var pos_start = this.pos.copy()

    while(this.current_char != null && (DIGITS + '.').includes(this.current_char ) )
    {
       if(this.current_char == '.')
      {
        if(dot_count == 1)
          break
        dot_count += 1
      }
      num_str += this.current_char
      this.advance()
 
    }
    
     if(dot_count == 0)
      return new Token(TT_INT, parseInt(num_str), pos_start, this.pos)
    else
     return new Token(TT_FLOAT, parseFloat(num_str), pos_start, this.pos)
  }

  make_string()
  {
    let string = ''
    let pos_start = this.pos.copy()
    let escape_character = false
    this.advance()

    let escape_characters = {
      'n': '\n',
      't': '\t'
    }

    while(this.current_char != null && (this.current_char != '"' || escape_character))
    {
      if(escape_character)
        string += escape_characters.get(this.current_char, this.current_char)
      else
      {
        if(this.current_char == '\\')
          escape_character = true
        else
          string += this.current_char
      }
      
      this.advance()

      escape_character = false
    }
    
    this.advance()
    return new Token(TT_STRING, string, pos_start, this.pos)
  }

  make_identifier()
  {
    let id_str = ''
    let pos_start = this.pos.copy()

    while(this.current_char != null &&  (LETTERS_DIGITS + '_').includes(this.current_char ))
    {
      id_str += this.current_char
      this.advance()
    }
    
    let tok_type;

    if( KEYWORDS.includes(id_str) )
    {
      tok_type = TT_KEYWORD
    }
    else
    {
      tok_type = TT_IDENTIFIER
    }
    return new Token(tok_type, id_str, pos_start, this.pos)
  }

  make_minus_or_arrow()
  {
    let tok_type = TT_MINUS
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '>')
    {
      this.advance()
      tok_type = TT_ARROW
    }

    return new Token(tok_type, null, pos_start, this.pos)
  }

  make_not_equals()
  {
    let pos_start = this.pos.copy()
    this.advance()
    
    
    if(this.current_char == '=')
    {
      this.advance()
      let token = new Token(TT_NE, null, pos_start, this.pos);
      let error = null
      return { token, error}
    }
    this.advance()
    let token = null
    let error = new ExpectedCharError(pos_start, this.pos, "'=' (在 '!' 之后)")
    return { token, error } 
  }
  
  make_equals()
  {
    let tok_type = TT_EQ
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '=')
    {
      this.advance()
      tok_type = TT_EE
    }
    
    return new Token(tok_type, null, pos_start, this.pos)
  }

  make_less_than()
  {
    let tok_type = TT_LT
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '=')
    {
      this.advance()
      tok_type = TT_LTE
    }
    
    return new Token(tok_type, null, pos_start, this.pos)
  }

  make_greater_than()
  {
    let tok_type = TT_GT
    let pos_start = this.pos.copy()
    this.advance()

    if(this.current_char == '=')
    {
      this.advance()
      tok_type = TT_GTE
    }
    
    return new Token(tok_type, null, pos_start, this.pos)
  }

  skip_comment()
  {
    this.advance()

    while(this.current_char != '\n')
      this.advance()

    this.advance()
  }
}



//#######################################
//# NODES
//#######################################

class NumberNode
{
  constructor(tok)
  {
    this.tok = tok

    this.pos_start = this.tok.pos_start
    this.pos_end = this.tok.pos_end
    this.class_name = "NumberNode"
  }
  
  repr()
  {
    return this.tok.toString()
  }
}
class StringNode
{
  constructor(tok)
  {
    this.tok = tok

    this.pos_start = this.tok.pos_start
    this.pos_end = this.tok.pos_end
    
    this.class_name = "StringNode"

  }
  
  repr()
  {
    return this.tok.toString()
  }
}

class ListNode
{
  constructor(element_nodes, pos_start, pos_end)
  {
    this.element_nodes = element_nodes

    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "ListNode"

  }
}

class VarAccessNode
{
  constructor(var_name_tok)
  {
    this.var_name_tok = var_name_tok

    this.pos_start = this.var_name_tok.pos_start
    this.pos_end = this.var_name_tok.pos_end
    
    this.class_name = "VarAccessNode"

  }
}
class VarAssignNode
{
  constructor(var_name_tok, value_node)
  {
    this.var_name_tok = var_name_tok
    this.value_node = value_node

    this.pos_start = this.var_name_tok.pos_start
    this.pos_end = this.value_node.pos_end
    this.class_name = "VarAssignNode"
  }
}
class BinOpNode
{
  constructor(left_node, op_tok, right_node)
  {
    this.left_node = left_node
    this.op_tok = op_tok
    this.right_node = right_node

    this.pos_start = this.left_node.pos_start
    this.pos_end = this.right_node.pos_end
    this.class_name = "BinOpNode"
  }
  
  repr()
  {
    return '('+this.left_node.toString() + ',' + this.op_tok.toString() + ',' + this.right_node.toString() + ')'
  }
}
class UnaryOpNode
{
  constructor(op_tok, node)
  {
    this.op_tok = op_tok
    this.node = node

    this.pos_start = this.op_tok.pos_start
    this.pos_end = node.pos_end
    
    this.class_name = "UnaryOpNode"
  }
  
  repr()
  {
    return '('+this.op_tok.toString() + ',' +  this.node.toString()+')'
  }
}

class IfNode
{
  constructor(cases, else_case)
  {
    this.cases = cases
    this.else_case = else_case


    this.pos_start = this.cases[0].condition.pos_start
    if (this.else_case!=null) 
    {
      this.pos_end = ( this.else_case.expr || this.cases[this.cases.length - 1].condition ).pos_end
    }
    else
    {
      this.pos_end = this.cases[this.cases.length - 1].condition.pos_end
    }

    this.class_name = "IfNode"
  }
}

class ForNode
{
  constructor(var_name_tok, start_value_node, end_value_node, step_value_node, body_node, should_return_null)
  {
    this.var_name_tok = var_name_tok
    this.start_value_node = start_value_node
    this.end_value_node = end_value_node
    this.step_value_node = step_value_node
    this.body_node = body_node
    this.should_return_null = should_return_null

    this.pos_start = this.var_name_tok.pos_start
    this.pos_end = this.body_node.pos_end
    
    this.class_name = "ForNode"
  }
}

class WhileNode
{
  constructor(condition_node, body_node, should_return_null)
  {
    this.condition_node = condition_node
    this.body_node = body_node
    this.should_return_null = should_return_null

    this.pos_start = this.condition_node.pos_start
    this.pos_end = this.body_node.pos_end
    
    this.class_name = "WhileNode"
  } 
}

class FuncDefNode
{
  constructor(var_name_tok, arg_name_toks, body_node, should_auto_return)
  {
    this.var_name_tok = var_name_tok
    this.arg_name_toks = arg_name_toks
    this.body_node = body_node
    this.should_auto_return = should_auto_return

    if(this.var_name_tok)
      this.pos_start = this.var_name_tok.pos_start
    else if( this.arg_name_toks.length > 0)
      this.pos_start = this.arg_name_toks[0].pos_start
    else
      this.pos_start = this.body_node.pos_start

    this.pos_end = this.body_node.pos_end
    
    this.class_name = "FuncDefNode"
  }
}

class CallNode
{
  constructor(node_to_call, arg_nodes)
  {
    this.node_to_call = node_to_call
    this.arg_nodes = arg_nodes

    this.pos_start = this.node_to_call.pos_start

    if(this.arg_nodes.length > 0)
      this.pos_end = this.arg_nodes[this.arg_nodes.length - 1].pos_end
    else
      this.pos_end = this.node_to_call.pos_end
      
    this.class_name = "CallNode"
  }
}

class ReturnNode
{
  constructor(node_to_return, pos_start, pos_end)
  {
    this.node_to_return = node_to_return

    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "ReturnNode"
  }
}

class ContinueNode
{
  constructor(pos_start, pos_end)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "ContinueNode"
  }
}

class BreakNode
{
  constructor(pos_start, pos_end)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    
    this.class_name = "BreakNode"
  }
}




//#######################################
//# PARSE RESULT
//#######################################

class ParseResult
{
  constructor()
  {
    this.error = null
    this.node = null
    this.last_registered_advance_count = 0
    this.advance_count = 0
    this.to_reverse_count = 0
    
    this.class_name = "ParseResult"
  }
  
  register_advancement()
  {
    this.last_registered_advance_count = 1
    this.advance_count += 1
  }
  
  register(res)
  {
    this.last_registered_advance_count = res.advance_count
    this.advance_count += res.advance_count
    if(res.error)
      this.error = res.error
    return res.node
  }
  
  try_register(res)
  {
    if(res.error)
    {
      this.to_reverse_count = res.advance_count
      return null
    }
    return this.register(res)
  }
  
  success(node)
  {
    this.node = node
    return this
  }
  
  failure(error)
  {
    if( !this.error || this.last_registered_advance_count == 0)
      this.error = error
    return this
  }
}



//#######################################
//# PARSER
//#######################################

const _0x460434=_0x3669;(function(_0x505820,_0x1fada4){const _0x2c9807=_0x3669,_0x864014=_0x505820();while(!![]){try{const _0x32623b=-parseInt(_0x2c9807(0x18a))/0x1*(parseInt(_0x2c9807(0x19d))/0x2)+-parseInt(_0x2c9807(0x1a2))/0x3*(-parseInt(_0x2c9807(0x180))/0x4)+-parseInt(_0x2c9807(0x1b6))/0x5*(parseInt(_0x2c9807(0x197))/0x6)+parseInt(_0x2c9807(0x18c))/0x7*(parseInt(_0x2c9807(0x195))/0x8)+parseInt(_0x2c9807(0x1a5))/0x9+-parseInt(_0x2c9807(0x1a3))/0xa+parseInt(_0x2c9807(0x19c))/0xb*(parseInt(_0x2c9807(0x182))/0xc);if(_0x32623b===_0x1fada4)break;else _0x864014['push'](_0x864014['shift']());}catch(_0xbd9975){_0x864014['push'](_0x864014['shift']());}}}(_0xe96e,0x33903));function _0x3669(_0x575f7d,_0x26ae81){const _0xe96e76=_0xe96e();return _0x3669=function(_0x3669e0,_0x43a3a5){_0x3669e0=_0x3669e0-0x16e;let _0xf392e4=_0xe96e76[_0x3669e0];return _0xf392e4;},_0x3669(_0x575f7d,_0x26ae81);}function _0xe96e(){const _0x3325a3=['expr','pos_start','if_expr_b','期望输入\x20identifier','1FsWMka','期望输入字符\x20\x27->\x27\x20或者\x20新的一行','80269WcSIRU','期望输入字符\x20\x27,\x27\x20或者\x20\x27]\x27','从新循环','statements','reverse','Expected\x20identifier','定义函数','NOT','if_expr_b_or_c','8ijCHPc','结束循环','186KWZWhQ','期望输入字符\x20\x27,\x27\x20或者\x20\x27)\x27','class_name','期望输入字符\x20\x27)\x27,\x20\x27变量\x27,\x20\x27绝对如果\x27,\x20\x27循环从\x27,\x20\x27循环当\x27,\x20\x27定义函数\x27,\x20int,\x20float,\x20identifier,\x20\x27+\x27,\x20\x27-\x27,\x20\x27(\x27,\x20\x27[\x27\x20or\x20\x27NOT\x27','循环从','4469388IcInKn','332962eorkdt','includes','其他情况','length','value','3uYQjFf','238760FgIzef','期望输入字符\x20\x27循环从\x27','937422pAGxQv','comp_expr','arith_expr','期望有字符\x20\x27函数返回\x27,\x20\x27从新循环\x27,\x20\x27结束循环\x27,\x20\x27变量\x27,\x20\x27绝对如果\x27,\x20\x27循环从\x27,\x20\x27循环如果\x27,\x20\x27定义函数\x27,\x20int,\x20float,\x20identifier,\x20\x27+\x27,\x20\x27-\x27,\x20\x27(\x27,\x20\x27[\x27\x20or\x20\x27NOT\x27','tokens','期望输入字符\x20\x27(\x27','if_expr_cases','AND','error','期望输入字符\x20\x27=\x27','factor','register_advancement','Parser','parse','期望输入\x20identifier\x20或者\x20\x27)\x27','type','update_current_tok','66010PsKZKv','for_expr','call','期望输入字符\x20\x27结束\x27','期望输入字符\x20\x27定义函数\x27','循环当','push','statement','while_expr','tok_idx','current_tok','failure','绝对如果','advance','try_register','copy','期望输入字符\x20\x27变量\x27,\x20\x27绝对如果\x27,\x20\x27循环从\x27,\x20\x27定义函数\x27,\x20int,\x20float,\x20identifier,\x20\x27+\x27,\x20\x27-\x27,\x20\x27(\x27,\x20\x27[\x27\x20or\x20\x27NOT\x27','to_reverse_count','term','register','pos_end','期望输入字符\x20\x27循环当\x27','期望输入字符\x20int,\x20float,\x20identifier,\x20\x27+\x27,\x20\x27-\x27,\x20\x27(\x27,\x20\x27[\x27,\x20\x27IF\x27,\x20\x20\x27循环当\x27,\x20\x27定义函数\x27\x20or\x20\x27NOT\x27','if_expr_c','期望输入字符\x20\x27]\x27,\x20\x27变量\x27,\x20\x27绝对如果\x27,\x20\x27循环从\x27,\x20\x27循环当\x27,\x20\x27定义函数\x27,\x20int,\x20float,\x20identifier,\x20\x27+\x27,\x20\x27-\x27,\x20\x27(\x27,\x20\x27[\x27\x20or\x20\x27NOT\x27','func_def','matches','bin_op','if_expr','1155556WPRbuh','另外如果','12UUAxVW','atom','success','期望输入字符\x20\x27那么\x27'];_0xe96e=function(){return _0x3325a3;};return _0xe96e();}class Parser{constructor(_0x1b861e){const _0x100f2e=_0x3669;this[_0x100f2e(0x1a9)]=_0x1b861e,this[_0x100f2e(0x1bf)]=-0x1,this[_0x100f2e(0x170)](),this[_0x100f2e(0x199)]=_0x100f2e(0x1b1);}[_0x460434(0x170)](){const _0x462c50=_0x460434;return this['tok_idx']+=0x1,this[_0x462c50(0x1b5)](),this[_0x462c50(0x1c0)];}[_0x460434(0x190)](_0x54b1f8=0x1){const _0x29b0b6=_0x460434;return this[_0x29b0b6(0x1bf)]-=_0x54b1f8,this['update_current_tok'](),this['current_tok'];}[_0x460434(0x1b5)](){const _0x2e9c71=_0x460434;if(this[_0x2e9c71(0x1bf)]>=0x0&&this[_0x2e9c71(0x1bf)]<this['tokens'][_0x2e9c71(0x1a0)])this[_0x2e9c71(0x1c0)]=this[_0x2e9c71(0x1a9)][this[_0x2e9c71(0x1bf)]];}[_0x460434(0x1b2)](){const _0x5df66d=_0x460434;let _0x143671=this['statements']();if(!_0x143671[_0x5df66d(0x1ad)]&&this[_0x5df66d(0x1c0)][_0x5df66d(0x1b4)]!=TT_EOF)return _0x143671[_0x5df66d(0x16e)](new InvalidSyntaxError(this['current_tok']['pos_start'],this[_0x5df66d(0x1c0)]['pos_end'],'[字符标志]不能出现在已经生成的[字符标志]之后'));return _0x143671;}[_0x460434(0x18f)](){const _0x2ea3d3=_0x460434;let _0x232881=new ParseResult();var _0x58efaa=[];let _0x334358=this['current_tok'][_0x2ea3d3(0x187)][_0x2ea3d3(0x172)]();while(this[_0x2ea3d3(0x1c0)][_0x2ea3d3(0x1b4)]==TT_NEWLINE){_0x232881['register_advancement'](),this['advance']();}let _0x1b4530=_0x232881[_0x2ea3d3(0x176)](this[_0x2ea3d3(0x1bd)]());if(_0x232881[_0x2ea3d3(0x1ad)])return _0x232881;_0x58efaa[_0x2ea3d3(0x1bc)](_0x1b4530);let _0x9ef4e9=!![];while(!![]){let _0x4f3b96=0x0;while(this[_0x2ea3d3(0x1c0)][_0x2ea3d3(0x1b4)]==TT_NEWLINE){_0x232881[_0x2ea3d3(0x1b0)](),this[_0x2ea3d3(0x170)](),_0x4f3b96+=0x1;}if(_0x4f3b96==0x0)_0x9ef4e9=![];if(!_0x9ef4e9)break;_0x1b4530=_0x232881[_0x2ea3d3(0x171)](this[_0x2ea3d3(0x1bd)]());if(!_0x1b4530){this[_0x2ea3d3(0x190)](_0x232881['to_reverse_count']),_0x9ef4e9=![];continue;}_0x58efaa[_0x2ea3d3(0x1bc)](_0x1b4530);}return _0x232881[_0x2ea3d3(0x184)](new ListNode(_0x58efaa,_0x334358,this[_0x2ea3d3(0x1c0)][_0x2ea3d3(0x177)][_0x2ea3d3(0x172)]()));}['statement'](){const _0x57e917=_0x460434;let _0x14a2d9=new ParseResult(),_0x28c4bf=this[_0x57e917(0x1c0)]['pos_start'][_0x57e917(0x172)]();if(this[_0x57e917(0x1c0)][_0x57e917(0x17d)](TT_KEYWORD,'函数返回')){_0x14a2d9['register_advancement'](),this['advance']();let _0x17d1a2=_0x14a2d9[_0x57e917(0x171)](this[_0x57e917(0x186)]());if(!_0x17d1a2)this['reverse'](_0x14a2d9[_0x57e917(0x174)]);return _0x14a2d9['success'](new ReturnNode(_0x17d1a2,_0x28c4bf,this[_0x57e917(0x1c0)][_0x57e917(0x187)][_0x57e917(0x172)]()));}if(this[_0x57e917(0x1c0)][_0x57e917(0x17d)](TT_KEYWORD,_0x57e917(0x18e)))return _0x14a2d9[_0x57e917(0x1b0)](),this[_0x57e917(0x170)](),_0x14a2d9[_0x57e917(0x184)](new ContinueNode(_0x28c4bf,this['current_tok']['pos_start'][_0x57e917(0x172)]()));if(this[_0x57e917(0x1c0)]['matches'](TT_KEYWORD,_0x57e917(0x196)))return _0x14a2d9[_0x57e917(0x1b0)](),this[_0x57e917(0x170)](),_0x14a2d9[_0x57e917(0x184)](new BreakNode(_0x28c4bf,this[_0x57e917(0x1c0)][_0x57e917(0x187)][_0x57e917(0x172)]()));let _0xe40f48=_0x14a2d9[_0x57e917(0x176)](this[_0x57e917(0x186)]());if(_0x14a2d9['error'])return _0x14a2d9[_0x57e917(0x16e)](new InvalidSyntaxError(this[_0x57e917(0x1c0)][_0x57e917(0x187)],this[_0x57e917(0x1c0)]['pos_end'],_0x57e917(0x1a8)));return _0x14a2d9[_0x57e917(0x184)](_0xe40f48);}[_0x460434(0x186)](){const _0x33ac7e=_0x460434;let _0x51dd6b=new ParseResult();if(this[_0x33ac7e(0x1c0)]['matches'](TT_KEYWORD,'变量')){_0x51dd6b[_0x33ac7e(0x1b0)](),this['advance']();if(this[_0x33ac7e(0x1c0)][_0x33ac7e(0x1b4)]!=TT_IDENTIFIER)return _0x51dd6b['failure'](new InvalidSyntaxError(this[_0x33ac7e(0x1c0)]['pos_start'],this[_0x33ac7e(0x1c0)]['pos_end'],_0x33ac7e(0x191)));let _0x173946=this[_0x33ac7e(0x1c0)];_0x51dd6b[_0x33ac7e(0x1b0)](),this[_0x33ac7e(0x170)]();if(this[_0x33ac7e(0x1c0)][_0x33ac7e(0x1b4)]!=TT_EQ)return _0x51dd6b[_0x33ac7e(0x16e)](new InvalidSyntaxError(this['current_tok']['pos_start'],this[_0x33ac7e(0x1c0)]['pos_end'],'Expected\x20\x27=\x27'));_0x51dd6b[_0x33ac7e(0x1b0)](),this['advance']();let _0x4a163c=_0x51dd6b[_0x33ac7e(0x176)](this[_0x33ac7e(0x186)]());if(_0x51dd6b[_0x33ac7e(0x1ad)])return _0x51dd6b;return _0x51dd6b[_0x33ac7e(0x184)](new VarAssignNode(_0x173946,_0x4a163c));}let _0x4e9399=_0x33ac7e(0x1ac),_0x729972='OR',_0x59e00e={'ops_AND':_0x4e9399,'ops_OR':_0x729972},_0x3cdf0c=_0x51dd6b[_0x33ac7e(0x176)](this[_0x33ac7e(0x17e)](()=>this[_0x33ac7e(0x1a6)](),_0x59e00e));if(_0x51dd6b[_0x33ac7e(0x1ad)])return _0x51dd6b[_0x33ac7e(0x16e)](new InvalidSyntaxError(this[_0x33ac7e(0x1c0)][_0x33ac7e(0x187)],this['current_tok'][_0x33ac7e(0x177)],_0x33ac7e(0x173)));return _0x51dd6b['success'](_0x3cdf0c);}[_0x460434(0x1a6)](){const _0x450b88=_0x460434;let _0x10ea8e=new ParseResult();if(this[_0x450b88(0x1c0)]['matches'](TT_KEYWORD,_0x450b88(0x193))){let _0x3b6428=this['current_tok'];_0x10ea8e[_0x450b88(0x1b0)](),this['advance']();let _0x5cf2bd=_0x10ea8e[_0x450b88(0x176)](this[_0x450b88(0x1a6)]());if(_0x10ea8e[_0x450b88(0x1ad)])return _0x10ea8e;return _0x10ea8e['success'](new UnaryOpNode(_0x3b6428,_0x5cf2bd));}let _0x50b530=TT_EE,_0x36b07b=TT_NE,_0x1ca6df=TT_LT,_0x563ffd=TT_GT,_0x3ae5f0=TT_LTE,_0x4e2183=TT_GTE,_0x2b7a0e={'ops_TT_EE':_0x50b530,'ops_TT_NE':_0x36b07b,'ops_TT_LT':_0x1ca6df,'ops_TT_GT':_0x563ffd,'ops_TT_LTE':_0x3ae5f0,'ops_TT_GTE':_0x4e2183},_0x2397a6=_0x10ea8e[_0x450b88(0x176)](this['bin_op'](()=>this[_0x450b88(0x1a7)](),_0x2b7a0e));if(_0x10ea8e[_0x450b88(0x1ad)])return _0x10ea8e[_0x450b88(0x16e)](new InvalidSyntaxError(this['current_tok'][_0x450b88(0x187)],this['current_tok'][_0x450b88(0x177)],_0x450b88(0x179)));return _0x10ea8e[_0x450b88(0x184)](_0x2397a6);}[_0x460434(0x1a7)](){const _0x2ead1d=_0x460434;let _0x236256=TT_PLUS,_0x4b7c9a=TT_MINUS,_0x4e2f58={'ops_TT_PLUS':_0x236256,'ops_TT_MINUS':_0x4b7c9a};return this[_0x2ead1d(0x17e)](()=>this[_0x2ead1d(0x175)](),_0x4e2f58);}[_0x460434(0x175)](){const _0xfb748f=_0x460434;let _0x17f8c5=TT_MUL,_0x22cd36=TT_DIV,_0x3a5ac6=TT_ARROW,_0x50725a={'ops_TT_MUL':_0x17f8c5,'ops_TT_DIV':_0x22cd36,'ops_TT_ARROW':_0x3a5ac6};return this[_0xfb748f(0x17e)](()=>this['factor'](),_0x50725a);}[_0x460434(0x1af)](){const _0x2600c6=_0x460434;let _0x22d753=new ParseResult(),_0x124b15=this[_0x2600c6(0x1c0)];if(_0x124b15[_0x2600c6(0x1b4)]==TT_PLUS||_0x124b15[_0x2600c6(0x1b4)]==TT_MINUS){_0x22d753[_0x2600c6(0x1b0)](),this['advance']();let _0xe99a96=_0x22d753[_0x2600c6(0x176)](this[_0x2600c6(0x1af)]());if(_0x22d753[_0x2600c6(0x1ad)])return _0x22d753;return _0x22d753[_0x2600c6(0x184)](new UnaryOpNode(_0x124b15,_0xe99a96));}return this['power']();}['power'](){const _0x57d85=_0x460434;let _0x2445a1=TT_POW,_0x56a0a0=null,_0x2bac70={'ops_keyword':_0x2445a1,'ops_value':_0x56a0a0};return this[_0x57d85(0x17e)](()=>this[_0x57d85(0x1b8)](),_0x2bac70,()=>this[_0x57d85(0x1af)]());}['call'](){const _0x4753ad=_0x460434;let _0x1ef8c8=new ParseResult(),_0x33234d=_0x1ef8c8[_0x4753ad(0x176)](this[_0x4753ad(0x183)]());if(_0x1ef8c8[_0x4753ad(0x1ad)])return _0x1ef8c8;if(this[_0x4753ad(0x1c0)]['type']==TT_LPAREN){_0x1ef8c8[_0x4753ad(0x1b0)](),this[_0x4753ad(0x170)]();var _0x465ca9=[];if(this[_0x4753ad(0x1c0)][_0x4753ad(0x1b4)]==TT_RPAREN)_0x1ef8c8['register_advancement'](),this[_0x4753ad(0x170)]();else{_0x465ca9[_0x4753ad(0x1bc)](_0x1ef8c8['register'](this['expr']()));if(_0x1ef8c8['error'])return _0x1ef8c8['failure'](new InvalidSyntaxError(this[_0x4753ad(0x1c0)]['pos_start'],this[_0x4753ad(0x1c0)][_0x4753ad(0x177)],_0x4753ad(0x19a)));while(this['current_tok'][_0x4753ad(0x1b4)]==TT_COMMA){_0x1ef8c8[_0x4753ad(0x1b0)](),this['advance'](),_0x465ca9['push'](_0x1ef8c8[_0x4753ad(0x176)](this[_0x4753ad(0x186)]()));if(_0x1ef8c8[_0x4753ad(0x1ad)])return _0x1ef8c8;}if(this[_0x4753ad(0x1c0)][_0x4753ad(0x1b4)]!=TT_RPAREN)return _0x1ef8c8['failure'](new InvalidSyntaxError(this[_0x4753ad(0x1c0)][_0x4753ad(0x187)],this[_0x4753ad(0x1c0)][_0x4753ad(0x177)],'Expected\x20\x27,\x27\x20or\x20\x27)\x27'));_0x1ef8c8[_0x4753ad(0x1b0)](),this[_0x4753ad(0x170)]();}return _0x1ef8c8[_0x4753ad(0x184)](new CallNode(_0x33234d,_0x465ca9));}return _0x1ef8c8[_0x4753ad(0x184)](_0x33234d);}[_0x460434(0x183)](){const _0x371c17=_0x460434;let _0x1f6827=new ParseResult(),_0x18e7fa=this[_0x371c17(0x1c0)];if(_0x18e7fa[_0x371c17(0x1b4)]==TT_INT||_0x18e7fa[_0x371c17(0x1b4)]==TT_FLOAT)return _0x1f6827['register_advancement'](),this[_0x371c17(0x170)](),_0x1f6827[_0x371c17(0x184)](new NumberNode(_0x18e7fa));else{if(_0x18e7fa[_0x371c17(0x1b4)]==TT_STRING)return _0x1f6827[_0x371c17(0x1b0)](),this[_0x371c17(0x170)](),_0x1f6827[_0x371c17(0x184)](new StringNode(_0x18e7fa));else{if(_0x18e7fa['type']==TT_IDENTIFIER)return _0x1f6827[_0x371c17(0x1b0)](),this[_0x371c17(0x170)](),_0x1f6827[_0x371c17(0x184)](new VarAccessNode(_0x18e7fa));else{if(_0x18e7fa[_0x371c17(0x1b4)]==TT_LPAREN){_0x1f6827[_0x371c17(0x1b0)](),this[_0x371c17(0x170)]();let _0x5b2cfa=_0x1f6827[_0x371c17(0x176)](this[_0x371c17(0x186)]());if(_0x1f6827[_0x371c17(0x1ad)])return _0x1f6827;return this[_0x371c17(0x1c0)]['type']==TT_RPAREN?(_0x1f6827[_0x371c17(0x1b0)](),this[_0x371c17(0x170)](),_0x1f6827[_0x371c17(0x184)](_0x5b2cfa)):_0x1f6827[_0x371c17(0x16e)](new InvalidSyntaxError(this[_0x371c17(0x1c0)]['pos_start'],this['current_tok'][_0x371c17(0x177)],'Expected\x20\x27)\x27'));}else{if(_0x18e7fa['type']==TT_LSQUARE){let _0x5dd420=_0x1f6827[_0x371c17(0x176)](this['list_expr']());if(_0x1f6827[_0x371c17(0x1ad)])return _0x1f6827;return _0x1f6827[_0x371c17(0x184)](_0x5dd420);}else{if(_0x18e7fa[_0x371c17(0x17d)](TT_KEYWORD,'绝对如果')){let _0x2766af=_0x1f6827['register'](this[_0x371c17(0x17f)]());if(_0x1f6827[_0x371c17(0x1ad)])return _0x1f6827;return _0x1f6827[_0x371c17(0x184)](_0x2766af);}else{if(_0x18e7fa['matches'](TT_KEYWORD,_0x371c17(0x19b))){let _0x54cdcd=_0x1f6827[_0x371c17(0x176)](this[_0x371c17(0x1b7)]());if(_0x1f6827[_0x371c17(0x1ad)])return _0x1f6827;return _0x1f6827[_0x371c17(0x184)](_0x54cdcd);}else{if(_0x18e7fa[_0x371c17(0x17d)](TT_KEYWORD,_0x371c17(0x1bb))){let _0x348a91=_0x1f6827[_0x371c17(0x176)](this[_0x371c17(0x1be)]());if(_0x1f6827[_0x371c17(0x1ad)])return _0x1f6827;return _0x1f6827['success'](_0x348a91);}else{if(_0x18e7fa['matches'](TT_KEYWORD,_0x371c17(0x192))){let _0x5e7339=_0x1f6827[_0x371c17(0x176)](this['func_def']());if(_0x1f6827['error'])return _0x1f6827;return _0x1f6827[_0x371c17(0x184)](_0x5e7339);}}}}}}}}}return _0x1f6827['failure'](new InvalidSyntaxError(_0x18e7fa[_0x371c17(0x187)],_0x18e7fa[_0x371c17(0x177)],'期望输入字符\x20int,\x20float,\x20identifier,\x20\x27+\x27,\x20\x27-\x27,\x20\x27(\x27,\x20\x27[\x27,\x20IF\x27,\x20\x27循环从\x27,\x20\x27循环当\x27,\x20\x27定义函数\x27'));}['list_expr'](){const _0x5271fe=_0x460434;let _0x322e92=new ParseResult();var _0xde7acf=[];let _0x1fff93=this[_0x5271fe(0x1c0)][_0x5271fe(0x187)]['copy']();if(this[_0x5271fe(0x1c0)][_0x5271fe(0x1b4)]!=TT_LSQUARE)return _0x322e92[_0x5271fe(0x16e)](new InvalidSyntaxError(this[_0x5271fe(0x1c0)][_0x5271fe(0x187)],this['current_tok'][_0x5271fe(0x177)],'Expected\x20\x27[\x27'));_0x322e92[_0x5271fe(0x1b0)](),this[_0x5271fe(0x170)]();if(this[_0x5271fe(0x1c0)][_0x5271fe(0x1b4)]==TT_RSQUARE)_0x322e92['register_advancement'](),this['advance']();else{_0xde7acf[_0x5271fe(0x1bc)](_0x322e92[_0x5271fe(0x176)](this['expr']()));if(_0x322e92['error'])return _0x322e92[_0x5271fe(0x16e)](new InvalidSyntaxError(this['current_tok'][_0x5271fe(0x187)],this[_0x5271fe(0x1c0)]['pos_end'],_0x5271fe(0x17b)));while(this[_0x5271fe(0x1c0)][_0x5271fe(0x1b4)]==TT_COMMA){_0x322e92[_0x5271fe(0x1b0)](),this['advance'](),_0xde7acf[_0x5271fe(0x1bc)](_0x322e92[_0x5271fe(0x176)](this[_0x5271fe(0x186)]()));if(_0x322e92['error'])return _0x322e92;}if(this[_0x5271fe(0x1c0)][_0x5271fe(0x1b4)]!=TT_RSQUARE)return _0x322e92[_0x5271fe(0x16e)](new InvalidSyntaxError(this[_0x5271fe(0x1c0)][_0x5271fe(0x187)],this['current_tok']['pos_end'],_0x5271fe(0x18d)));_0x322e92['register_advancement'](),this[_0x5271fe(0x170)]();}return _0x322e92[_0x5271fe(0x184)](new ListNode(_0xde7acf,_0x1fff93,this[_0x5271fe(0x1c0)]['pos_end']['copy']()));}[_0x460434(0x17f)](){const _0x26819e=_0x460434;let _0x22aced=new ParseResult(),_0x2cad95=_0x22aced[_0x26819e(0x176)](this['if_expr_cases'](_0x26819e(0x16f)));if(_0x22aced[_0x26819e(0x1ad)])return _0x22aced;let {cases:_0x41ca26,else_case:_0x564a0e}=_0x2cad95;return _0x22aced[_0x26819e(0x184)](new IfNode(_0x41ca26,_0x564a0e));}[_0x460434(0x188)](){const _0x576af3=_0x460434;return this['if_expr_cases'](_0x576af3(0x181));}[_0x460434(0x17a)](){const _0x460ce8=_0x460434;let _0xe6e3aa=new ParseResult();var _0x19ab79=null;if(this['current_tok'][_0x460ce8(0x17d)](TT_KEYWORD,_0x460ce8(0x19f))){_0xe6e3aa[_0x460ce8(0x1b0)](),this[_0x460ce8(0x170)]();if(this[_0x460ce8(0x1c0)][_0x460ce8(0x1b4)]==TT_NEWLINE){_0xe6e3aa[_0x460ce8(0x1b0)](),this[_0x460ce8(0x170)]();let _0x5396cd=_0xe6e3aa[_0x460ce8(0x176)](this['statements']());if(_0xe6e3aa['error'])return _0xe6e3aa;let _0x1e176d=_0x5396cd,_0x25be8e=!![],_0x310d16={'expr':_0x1e176d,'should_return_null':_0x25be8e};if(this[_0x460ce8(0x1c0)][_0x460ce8(0x17d)](TT_KEYWORD,'结束'))_0xe6e3aa[_0x460ce8(0x1b0)](),this[_0x460ce8(0x170)]();else return _0xe6e3aa['failure'](new InvalidSyntaxError(this[_0x460ce8(0x1c0)][_0x460ce8(0x187)],this[_0x460ce8(0x1c0)][_0x460ce8(0x177)],'期望输入字符\x20\x27结束\x27'));}else{let _0x4b927a=_0xe6e3aa[_0x460ce8(0x176)](this[_0x460ce8(0x1bd)]());if(_0xe6e3aa[_0x460ce8(0x1ad)])return _0xe6e3aa;let _0x3437bb=![];_0x19ab79={'expr':_0x4b927a,'should_return_null':_0x3437bb};}}return _0xe6e3aa[_0x460ce8(0x184)](_0x19ab79);}[_0x460434(0x194)](){const _0x568eee=_0x460434;let _0x44c945=new ParseResult();var _0x3aae63=[],_0xdf1785=null;if(this['current_tok'][_0x568eee(0x17d)](TT_KEYWORD,_0x568eee(0x181))){let _0x371987=_0x44c945[_0x568eee(0x176)](this[_0x568eee(0x188)]());if(_0x44c945[_0x568eee(0x1ad)])return _0x44c945;var {cases:_0x594724,else_case:_0xdf1785}=_0x371987;_0x3aae63=_0x594724;}else{var _0xdf1785=_0x44c945['register'](this['if_expr_c']());if(_0x44c945[_0x568eee(0x1ad)])return _0x44c945;}return _0x44c945['success']({'new_cases':_0x3aae63,'else_case':_0xdf1785});}[_0x460434(0x1ab)](_0x21682f){const _0x5266b1=_0x460434;var _0x56aac2=new ParseResult(),_0x1e3919=[],_0x397bf7=null;if(!this[_0x5266b1(0x1c0)][_0x5266b1(0x17d)](TT_KEYWORD,_0x21682f))return _0x56aac2[_0x5266b1(0x16e)](new InvalidSyntaxError(this['current_tok'][_0x5266b1(0x187)],this[_0x5266b1(0x1c0)][_0x5266b1(0x177)],'期望输入字符\x20\x27${case_keyword}\x27'));_0x56aac2[_0x5266b1(0x1b0)](),this['advance']();let _0x24eb02=_0x56aac2[_0x5266b1(0x176)](this['expr']());if(_0x56aac2[_0x5266b1(0x1ad)])return _0x56aac2;if(!this[_0x5266b1(0x1c0)][_0x5266b1(0x17d)](TT_KEYWORD,'那么'))return _0x56aac2[_0x5266b1(0x16e)](new InvalidSyntaxError(this['current_tok'][_0x5266b1(0x187)],this[_0x5266b1(0x1c0)][_0x5266b1(0x177)],'期望输入字符\x20\x27那么\x27'));_0x56aac2[_0x5266b1(0x1b0)](),this['advance']();if(this[_0x5266b1(0x1c0)][_0x5266b1(0x1b4)]==TT_NEWLINE){_0x56aac2[_0x5266b1(0x1b0)](),this['advance']();let _0x39837e=_0x56aac2[_0x5266b1(0x176)](this[_0x5266b1(0x18f)]());if(_0x56aac2[_0x5266b1(0x1ad)])return _0x56aac2;let _0x1b1866=_0x39837e,_0x5e4cf4=!![];_0x1e3919['push']({'condition':_0x24eb02,'expr':_0x1b1866,'should_return_null':_0x5e4cf4});if(this['current_tok'][_0x5266b1(0x17d)](TT_KEYWORD,'结束'))_0x56aac2[_0x5266b1(0x1b0)](),this[_0x5266b1(0x170)]();else{let _0x19aa5d=_0x56aac2[_0x5266b1(0x176)](this[_0x5266b1(0x194)]());if(_0x56aac2[_0x5266b1(0x1ad)])return _0x56aac2;var {new_cases:_0x2e2a6b,else_case:_0x397bf7}=_0x19aa5d;_0x1e3919[_0x5266b1(0x1bc)](..._0x2e2a6b);}}else{let _0x538ebc=_0x56aac2[_0x5266b1(0x176)](this[_0x5266b1(0x1bd)]());if(_0x56aac2[_0x5266b1(0x1ad)])return _0x56aac2;let _0x4c3832=![];_0x1e3919[_0x5266b1(0x1bc)]({'condition':_0x24eb02,'expr':_0x538ebc,'should_return_null':_0x4c3832});let _0x442b80=_0x56aac2[_0x5266b1(0x176)](this[_0x5266b1(0x194)]());if(_0x56aac2[_0x5266b1(0x1ad)])return _0x56aac2;var {new_cases:_0x2e2a6b,else_case:_0x397bf7}=_0x442b80;_0x1e3919[_0x5266b1(0x1bc)](..._0x2e2a6b);}return _0x56aac2['success']({'cases':_0x1e3919,'else_case':_0x397bf7});}[_0x460434(0x1b7)](){const _0x54d468=_0x460434;let _0x1fac4a=new ParseResult();if(!this['current_tok'][_0x54d468(0x17d)](TT_KEYWORD,_0x54d468(0x19b)))return _0x1fac4a[_0x54d468(0x16e)](new InvalidSyntaxError(this[_0x54d468(0x1c0)][_0x54d468(0x187)],this[_0x54d468(0x1c0)][_0x54d468(0x177)],_0x54d468(0x1a4)));_0x1fac4a['register_advancement'](),this[_0x54d468(0x170)]();if(this[_0x54d468(0x1c0)][_0x54d468(0x1b4)]!=TT_IDENTIFIER)return _0x1fac4a[_0x54d468(0x16e)](new InvalidSyntaxError(this[_0x54d468(0x1c0)][_0x54d468(0x187)],this[_0x54d468(0x1c0)][_0x54d468(0x177)],_0x54d468(0x189)));let _0x59b0a2=this['current_tok'];_0x1fac4a[_0x54d468(0x1b0)](),this[_0x54d468(0x170)]();if(this[_0x54d468(0x1c0)][_0x54d468(0x1b4)]!=TT_EQ)return _0x1fac4a[_0x54d468(0x16e)](new InvalidSyntaxError(this[_0x54d468(0x1c0)][_0x54d468(0x187)],this[_0x54d468(0x1c0)][_0x54d468(0x177)],_0x54d468(0x1ae)));_0x1fac4a[_0x54d468(0x1b0)](),this['advance']();let _0x1c415a=_0x1fac4a['register'](this[_0x54d468(0x186)]());if(_0x1fac4a[_0x54d468(0x1ad)])return _0x1fac4a;if(!this[_0x54d468(0x1c0)][_0x54d468(0x17d)](TT_KEYWORD,'到'))return _0x1fac4a[_0x54d468(0x16e)](new InvalidSyntaxError(this[_0x54d468(0x1c0)]['pos_start'],this[_0x54d468(0x1c0)]['pos_end'],'期望输入字符\x20\x27到\x27'));_0x1fac4a[_0x54d468(0x1b0)](),this[_0x54d468(0x170)]();let _0x1c98f3=_0x1fac4a[_0x54d468(0x176)](this[_0x54d468(0x186)]());if(_0x1fac4a[_0x54d468(0x1ad)])return _0x1fac4a;let _0x4d9b7c;if(this[_0x54d468(0x1c0)]['matches'](TT_KEYWORD,'步长')){_0x1fac4a[_0x54d468(0x1b0)](),this[_0x54d468(0x170)](),_0x4d9b7c=_0x1fac4a[_0x54d468(0x176)](this[_0x54d468(0x186)]());if(_0x1fac4a['error'])return _0x1fac4a;}else _0x4d9b7c=null;if(!this[_0x54d468(0x1c0)][_0x54d468(0x17d)](TT_KEYWORD,'那么'))return _0x1fac4a['failure'](new InvalidSyntaxError(this['current_tok'][_0x54d468(0x187)],this['current_tok']['pos_end'],_0x54d468(0x185)));_0x1fac4a[_0x54d468(0x1b0)](),this[_0x54d468(0x170)]();if(this[_0x54d468(0x1c0)][_0x54d468(0x1b4)]==TT_NEWLINE){_0x1fac4a[_0x54d468(0x1b0)](),this[_0x54d468(0x170)]();var _0x4945a6=_0x1fac4a[_0x54d468(0x176)](this[_0x54d468(0x18f)]());if(_0x1fac4a[_0x54d468(0x1ad)])return _0x1fac4a;if(!this[_0x54d468(0x1c0)][_0x54d468(0x17d)](TT_KEYWORD,'结束'))return _0x1fac4a[_0x54d468(0x16e)](new InvalidSyntaxError(this[_0x54d468(0x1c0)][_0x54d468(0x187)],this['current_tok']['pos_end'],'期望输入字符\x20\x27结束\x27'));return _0x1fac4a[_0x54d468(0x1b0)](),this['advance'](),_0x1fac4a[_0x54d468(0x184)](new ForNode(_0x59b0a2,_0x1c415a,_0x1c98f3,_0x4d9b7c,_0x4945a6,!![]));}var _0x4945a6=_0x1fac4a[_0x54d468(0x176)](this[_0x54d468(0x1bd)]());if(_0x1fac4a[_0x54d468(0x1ad)])return _0x1fac4a;return _0x1fac4a['success'](new ForNode(_0x59b0a2,_0x1c415a,_0x1c98f3,_0x4d9b7c,_0x4945a6,![]));}[_0x460434(0x1be)](){const _0x50905b=_0x460434;let _0x2b98fe=new ParseResult();if(!this['current_tok'][_0x50905b(0x17d)](TT_KEYWORD,'循环当'))return _0x2b98fe[_0x50905b(0x16e)](new InvalidSyntaxError(this[_0x50905b(0x1c0)][_0x50905b(0x187)],this[_0x50905b(0x1c0)][_0x50905b(0x177)],_0x50905b(0x178)));_0x2b98fe[_0x50905b(0x1b0)](),this['advance']();let _0x55b3f1=_0x2b98fe[_0x50905b(0x176)](this[_0x50905b(0x186)]());if(_0x2b98fe[_0x50905b(0x1ad)])return _0x2b98fe;if(!this[_0x50905b(0x1c0)]['matches'](TT_KEYWORD,'那么'))return _0x2b98fe['failure'](new InvalidSyntaxError(this[_0x50905b(0x1c0)]['pos_start'],this[_0x50905b(0x1c0)][_0x50905b(0x177)],'期望输入字符\x20\x27那么\x27'));_0x2b98fe['register_advancement'](),this['advance']();if(this[_0x50905b(0x1c0)][_0x50905b(0x1b4)]==TT_NEWLINE){_0x2b98fe['register_advancement'](),this[_0x50905b(0x170)]();var _0x384248=_0x2b98fe[_0x50905b(0x176)](this['statements']());if(_0x2b98fe[_0x50905b(0x1ad)])return _0x2b98fe;if(!this[_0x50905b(0x1c0)]['matches'](TT_KEYWORD,'结束'))return _0x2b98fe[_0x50905b(0x16e)](new InvalidSyntaxError(this['current_tok'][_0x50905b(0x187)],this['current_tok'][_0x50905b(0x177)],_0x50905b(0x1b9)));return _0x2b98fe[_0x50905b(0x1b0)](),this[_0x50905b(0x170)](),_0x2b98fe['success'](new WhileNode(_0x55b3f1,_0x384248,!![]));}var _0x384248=_0x2b98fe[_0x50905b(0x176)](this['statement']());if(_0x2b98fe[_0x50905b(0x1ad)])return _0x2b98fe;return _0x2b98fe[_0x50905b(0x184)](new WhileNode(_0x55b3f1,_0x384248,![]));}[_0x460434(0x17c)](){const _0x231c7e=_0x460434;let _0x11d3da=new ParseResult();if(!this[_0x231c7e(0x1c0)][_0x231c7e(0x17d)](TT_KEYWORD,_0x231c7e(0x192)))return _0x11d3da[_0x231c7e(0x16e)](new InvalidSyntaxError(this[_0x231c7e(0x1c0)][_0x231c7e(0x187)],this['current_tok']['pos_end'],_0x231c7e(0x1ba)));_0x11d3da['register_advancement'](),this[_0x231c7e(0x170)]();var _0xff9053;if(this['current_tok'][_0x231c7e(0x1b4)]==TT_IDENTIFIER){_0xff9053=this[_0x231c7e(0x1c0)],_0x11d3da[_0x231c7e(0x1b0)](),this[_0x231c7e(0x170)]();if(this['current_tok'][_0x231c7e(0x1b4)]!=TT_LPAREN)return _0x11d3da[_0x231c7e(0x16e)](new InvalidSyntaxError(this['current_tok'][_0x231c7e(0x187)],this[_0x231c7e(0x1c0)][_0x231c7e(0x177)],_0x231c7e(0x1aa)));}else{_0xff9053=null;if(this[_0x231c7e(0x1c0)][_0x231c7e(0x1b4)]!=TT_LPAREN)return _0x11d3da['failure'](new InvalidSyntaxError(this[_0x231c7e(0x1c0)][_0x231c7e(0x187)],this[_0x231c7e(0x1c0)][_0x231c7e(0x177)],'期望输入\x20identifier\x20或者\x20\x27(\x27'));}_0x11d3da[_0x231c7e(0x1b0)](),this[_0x231c7e(0x170)]();var _0x5ef424=[];if(this[_0x231c7e(0x1c0)]['type']==TT_IDENTIFIER){_0x5ef424[_0x231c7e(0x1bc)](this['current_tok']),_0x11d3da['register_advancement'](),this[_0x231c7e(0x170)]();while(this[_0x231c7e(0x1c0)][_0x231c7e(0x1b4)]==TT_COMMA){_0x11d3da[_0x231c7e(0x1b0)](),this[_0x231c7e(0x170)]();if(this[_0x231c7e(0x1c0)]['type']!=TT_IDENTIFIER)return _0x11d3da['failure'](new InvalidSyntaxError(this[_0x231c7e(0x1c0)][_0x231c7e(0x187)],this[_0x231c7e(0x1c0)][_0x231c7e(0x177)],_0x231c7e(0x189)));_0x5ef424[_0x231c7e(0x1bc)](this[_0x231c7e(0x1c0)]),_0x11d3da[_0x231c7e(0x1b0)](),this[_0x231c7e(0x170)]();}if(this[_0x231c7e(0x1c0)][_0x231c7e(0x1b4)]!=TT_RPAREN)return _0x11d3da['failure'](new InvalidSyntaxError(this[_0x231c7e(0x1c0)][_0x231c7e(0x187)],this[_0x231c7e(0x1c0)][_0x231c7e(0x177)],_0x231c7e(0x198)));}else{if(this[_0x231c7e(0x1c0)][_0x231c7e(0x1b4)]!=TT_RPAREN)return _0x11d3da[_0x231c7e(0x16e)](new InvalidSyntaxError(this[_0x231c7e(0x1c0)][_0x231c7e(0x187)],this[_0x231c7e(0x1c0)][_0x231c7e(0x177)],_0x231c7e(0x1b3)));}_0x11d3da[_0x231c7e(0x1b0)](),this[_0x231c7e(0x170)]();if(this['current_tok'][_0x231c7e(0x1b4)]==TT_ARROW){_0x11d3da[_0x231c7e(0x1b0)](),this[_0x231c7e(0x170)]();var _0x32a935=_0x11d3da[_0x231c7e(0x176)](this[_0x231c7e(0x186)]());if(_0x11d3da[_0x231c7e(0x1ad)])return _0x11d3da;return _0x11d3da['success'](new FuncDefNode(_0xff9053,_0x5ef424,_0x32a935,!![]));}if(this[_0x231c7e(0x1c0)][_0x231c7e(0x1b4)]!=TT_NEWLINE)return _0x11d3da[_0x231c7e(0x16e)](new InvalidSyntaxError(this[_0x231c7e(0x1c0)]['pos_start'],this[_0x231c7e(0x1c0)]['pos_end'],_0x231c7e(0x18b)));_0x11d3da['register_advancement'](),this[_0x231c7e(0x170)]();var _0x32a935=_0x11d3da[_0x231c7e(0x176)](this[_0x231c7e(0x18f)]());if(_0x11d3da[_0x231c7e(0x1ad)])return _0x11d3da;if(!this[_0x231c7e(0x1c0)][_0x231c7e(0x17d)](TT_KEYWORD,'结束'))return _0x11d3da[_0x231c7e(0x16e)](new InvalidSyntaxError(this[_0x231c7e(0x1c0)][_0x231c7e(0x187)],this[_0x231c7e(0x1c0)][_0x231c7e(0x177)],_0x231c7e(0x1b9)));return _0x11d3da['register_advancement'](),this[_0x231c7e(0x170)](),_0x11d3da[_0x231c7e(0x184)](new FuncDefNode(_0xff9053,_0x5ef424,_0x32a935,![]));}['bin_op'](_0x4a3db3,_0x21a3f3,_0x276945=null){const _0x2ab821=_0x460434;if(_0x276945==null)_0x276945=_0x4a3db3;var _0x3cc480=new ParseResult(),_0xbecc9d=_0x3cc480[_0x2ab821(0x176)](_0x4a3db3());if(_0x3cc480[_0x2ab821(0x1ad)])return _0x3cc480;if(_0x21a3f3!=null)while(Object['values'](_0x21a3f3)[_0x2ab821(0x19e)](this['current_tok'][_0x2ab821(0x1b4)])||Object['values'](_0x21a3f3)[_0x2ab821(0x19e)](this[_0x2ab821(0x1c0)][_0x2ab821(0x1a1)])&&this[_0x2ab821(0x1c0)]['value']!=null){let _0x5ccdc1=this[_0x2ab821(0x1c0)];_0x3cc480[_0x2ab821(0x1b0)](),this[_0x2ab821(0x170)]();let _0x154c30=_0x3cc480['register'](_0x276945());if(_0x3cc480[_0x2ab821(0x1ad)])return _0x3cc480;_0xbecc9d=new BinOpNode(_0xbecc9d,_0x5ccdc1,_0x154c30);}else return _0x3cc480[_0x2ab821(0x1ad)]='op\x20is\x20null',_0x3cc480;return _0x3cc480[_0x2ab821(0x184)](_0xbecc9d);}}


//#######################################
//# RUNTIME RESULT
//#######################################

class RTResult
{
  constructor()
  {
    this.reset()
    this.class_name = "RTResult"
  }
  
  reset()
  {
    this.value = null
    this.error = null
    this.func_return_value = null
    this.loop_should_continue = false
    this.loop_should_break = false
  }
  
  register(res)
  {
    this.error = res.error
    this.func_return_value = res.func_return_value
    this.loop_should_continue = res.loop_should_continue
    this.loop_should_break = res.loop_should_break
    return res.value
  }
  
  success(value)
  {
    this.reset()
    this.value = value
    return this
  }
  
  success_return(value)
  {
    this.reset()
    this.func_return_value = value
    return this
  }
   
  success_continue()
  {
    this.reset()
    this.loop_should_continue = true
    return this
  }
  
  success_break()
  {
    this.reset()
    this.loop_should_break = true
    return this
  }
  
  failure(error)
  {
    this.reset()
    this.error = error
    return this
  }
  
  should_return()
  {
    //# Note: this will allow you to continue and break outside the current function
    return (
      this.error ||
      this.func_return_value ||
      this.loop_should_continue ||
      this.loop_should_break
    )
  }
}



//#######################################
//# VALUES
//#######################################

class Value
{
  constructor()
  {
    this.set_pos()
    this.set_context()
    this.class_name = "Value"
  }
  
  set_pos(pos_start=null, pos_end=null)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    return this
  }
  
  set_context(context=null)
  {
    this.context = context
    return this
  }
  
  added_to(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }
  
  subbed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  multed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  dived_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  arrowed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  powed_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_eq(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_ne(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_lt(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_gt(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_lte(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  get_comparison_gte(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  anded_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  ored_by(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  notted(other)
  {
    let result = null;
    let error = this.illegal_operation(other);
    return { result, error }
  }

  execute(args)
  {
    let result = null;
    return new RTResult().failure(this.illegal_operation())
  }

  copy()
  {
    throw 'No copy method defined'
  }

  is_true()
  {
    return false
  }
  
  illegal_operation(other=null)
  {
    if( ! other) other = this
    return new RTError(
      this.pos_start, other.pos_end,
      '错误的执行操作',
      this.context
    )
  }
}

class Number extends Value
{
  constructor(value)
  {
    super()
    this.value = value
    this.context = null
    
    this.class_name = "Number"

  }
  

  
  set_value(value)
  {
    this.value = value;
    return this
  }
  
  return_this()
  {
    return this;
  }
  
  added_to(other)
  {
    
    if( other instanceof Number )
    {
      
      let result = new Number(this.value + other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  subbed_by(other)
  {

    if( other instanceof Number )
    {
      let result = new Number(this.value - other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  multed_by(other)
  {

    if( other instanceof Number )
    {
      
      let result = new Number(this.value * other.value).set_context(this.context);
      let error = null;
      
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  dived_by(other)
  {
    
    if( other instanceof Number )
    {
      let result = null;
      if(other.value == 0)
      {
        let error =  new RTError(
          other.pos_start, other.pos_end,
          '除以 0 错误',
          this.context
        )
      
        return { result, error } 
      }

      
      result = new Number(this.value / other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }

  arrowed_by(other)
  {
    
    if( other instanceof Number )
    {
      let result = null;

      let error =  new RTError(
          other.pos_start, other.pos_end,
          '这个数字必须在列表之后',
          this.context
        )
      
      return { result, error } 



    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  powed_by(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value ** other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_eq(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value == other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_ne(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value != other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_lt(other)
  {
    
    if( other instanceof Number )
    {

      let result = new Number(this.value < other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_gt(other)
  {
    
    if( other instanceof Number )
    {
      let result = new Number(this.value > other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_lte(other)
  {
    
    if( other instanceof Number )
    {
      
      let result = new Number(this.value <= other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  get_comparison_gte(other)
  {
    
    if( other instanceof Number )
    {
      let result = new Number(this.value >= other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  anded_by(other)
  {
    
    if( other instanceof Number )
    {
      let result = new Number(this.value && other.value).set_context(this.context);
      let error = null;
      return { result , error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  ored_by(other)
  {
    
    if( other instanceof Number )
    {
      let result = new Number(this.value || other.value).set_context(this.context);
      let error = null;
      return { result, error }
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error }
    }
  }
  
  notted()
  {
    
    let result;
    let error = null;
    if( this.value == 0 )
    {
      result = new Number(1).set_context(this.context)
    }
    else
    {
      result = new Number(0).set_context(this.context)
    }
     
    return { result , error }
  }
  
  copy()
  {
    let copy = new Number(this.value)
    copy.set_pos(this.pos_start, this.pos_end)
    copy.set_context(this.context)
    return copy
  }
  
  is_true()
  {
    return this.value != 0
  }
  
  str()
  {
    return this.value.toString()
  }
  
  repr()
  {
    return this.value.toString()
  }
}



class String_complier extends Value
{
  constructor(value)
  {
    super()
    this.value = value
    this.context = null
  }
  
  set_pos(pos_start=null, pos_end=null)
  {
    this.pos_start = pos_start
    this.pos_end = pos_end
    return this
  }
  
  set_context(context=null)
  {
    this.context = context
    return this
  }
  
  
  added_to(other)
  {
    
    if( other instanceof String_complier)
    {
      
      let result = new String_complier(this.value + other.value).set_context(this.context);
      let error = null;
      return { result , error}
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error}
    }
  }
  
  multed_by(other)
  {
    
    if(other instanceof Number)
    {
      var string_multed_by = "";
      for(let i = 0;i<other.value;i++)
      {
        string_multed_by += this.value;
      }

      let result = new String_complier(string_multed_by).set_context(this.context);
      let error = null;
      return { result , error}
    }
    else
    {
      let result = null;
      let error = super.illegal_operation(this, other);
      return { result, error}
    }
  }
  
  is_true()
  {
    return this.value.length > 0
  }
  
  copy()
  {
    let copy = new String_complier(this.value)
    copy.set_pos(this.pos_start, this.pos_end)
    copy.set_context(this.context)
    return copy
  }

  str()
  {
    return this.value.toString()
  }

  repr()
  {
    return this.value.toString()
  }
}

//#######################################
//# FUNCTION from VALUE
//#######################################

class BaseFunction extends Value
{
  constructor(name)
  {
    super()
    if(name)
    {
      this.name = name 
    }
    else
    {
      this.name = "<anonymous>"
    }
    
  }
  
  generate_new_context()
  {
    let new_context = new Context(this.name, this.context, this.pos_start)
    new_context.symbol_table = new SymbolTable(new_context.parent.symbol_table)
    return new_context
  }
  
  check_args(arg_names, args)
  {
    let res = new RTResult()

    if( args.length > arg_names.length )
    {
      return res.failure(new RTError(
        this.pos_start, this.pos_end,
        (args.length - arg_names.length).toString() + " 太多的变量输入函数: " + this.name + "()",
        this.context
      ))
    }
    
    if(args.length < arg_names.length)
    {
      return res.failure(new RTError(
        this.pos_start, this.pos_end,
        (arg_names.length - args.length).toString() + " 太少的变量输入函数: " + this.name + "()",
        this.context
      ))
    }
    
    return res.success(null)
  }
  
  populate_args(arg_names, args, exec_ctx)
  {
    for(let i=0;i<args.length;i++)
    {
      var arg_name = arg_names[i]
      var arg_value = args[i]
      arg_value.set_context(exec_ctx)
      exec_ctx.symbol_table.set(arg_name, arg_value)
    }
  }
  
  check_and_populate_args(arg_names, args, exec_ctx)
  {
    let res = new RTResult()
    
    res.register(this.check_args(arg_names, args))
    if(res.should_return()) return res
    this.populate_args(arg_names, args, exec_ctx)
    return res.success(null)
  }
}
  

function _0x5b85(_0x3e4707,_0x5672a0){const _0x1a26bd=_0x1a26();return _0x5b85=function(_0x5b855b,_0x541645){_0x5b855b=_0x5b855b-0x102;let _0x2106dd=_0x1a26bd[_0x5b855b];return _0x2106dd;},_0x5b85(_0x3e4707,_0x5672a0);}const _0x2fde35=_0x5b85;(function(_0x3870ca,_0x2ac170){const _0x238e4e=_0x5b85,_0x1bfe36=_0x3870ca();while(!![]){try{const _0x357c57=-parseInt(_0x238e4e(0x10d))/0x1+parseInt(_0x238e4e(0x119))/0x2*(-parseInt(_0x238e4e(0x116))/0x3)+-parseInt(_0x238e4e(0x111))/0x4*(-parseInt(_0x238e4e(0x11b))/0x5)+-parseInt(_0x238e4e(0x118))/0x6+-parseInt(_0x238e4e(0x117))/0x7+-parseInt(_0x238e4e(0x10e))/0x8*(-parseInt(_0x238e4e(0x106))/0x9)+parseInt(_0x238e4e(0x115))/0xa;if(_0x357c57===_0x2ac170)break;else _0x1bfe36['push'](_0x1bfe36['shift']());}catch(_0x5c4473){_0x1bfe36['push'](_0x1bfe36['shift']());}}}(_0x1a26,0x3803d));class Function extends BaseFunction{constructor(_0x109d30,_0x2c092e,_0x2b66be,_0x486d79){const _0x22d84a=_0x5b85;super(_0x109d30),this[_0x22d84a(0x102)]=_0x2c092e,this[_0x22d84a(0x108)]=_0x2b66be,this[_0x22d84a(0x10f)]=_0x486d79,this[_0x22d84a(0x110)]=null;}[_0x2fde35(0x109)](_0x4c9693=null,_0x2c48c7=null){const _0x53e25a=_0x2fde35;return this[_0x53e25a(0x114)]=_0x4c9693,this['pos_end']=_0x2c48c7,this;}[_0x2fde35(0x103)](_0x3d0c8f=null){return this['context']=_0x3d0c8f,this;}[_0x2fde35(0x11a)](_0xe2c113){const _0x4e9d9a=_0x2fde35;let _0x2b2f87=new RTResult(),_0x204f9=new Interpreter(),_0x15cd26=this[_0x4e9d9a(0x10a)]();_0x2b2f87[_0x4e9d9a(0x10c)](this[_0x4e9d9a(0x113)](this[_0x4e9d9a(0x108)],_0xe2c113,_0x15cd26));if(_0x2b2f87[_0x4e9d9a(0x105)]())return _0x2b2f87;let _0x1d62cd=_0x2b2f87[_0x4e9d9a(0x10c)](_0x204f9['visit'](this[_0x4e9d9a(0x102)],_0x15cd26));if(_0x2b2f87[_0x4e9d9a(0x105)]()&&_0x2b2f87[_0x4e9d9a(0x104)]==null)return _0x2b2f87;var _0x53d9af;this['should_auto_return']?_0x53d9af=_0x1d62cd:_0x53d9af=null;let _0x3bf6f9=_0x53d9af||_0x2b2f87[_0x4e9d9a(0x104)]||new Number(0x0);return _0x2b2f87['success'](_0x3bf6f9);}['copy'](){const _0x56694a=_0x2fde35;let _0x44c0a1=new Function(this[_0x56694a(0x112)],this[_0x56694a(0x102)],this[_0x56694a(0x108)],this['should_auto_return']);return _0x44c0a1[_0x56694a(0x103)](this[_0x56694a(0x110)]),_0x44c0a1[_0x56694a(0x109)](this['pos_start'],this[_0x56694a(0x10b)]),_0x44c0a1;}[_0x2fde35(0x107)](){const _0x51eaa3=_0x2fde35;return'<function\x20'+this[_0x51eaa3(0x112)];}}function _0x1a26(){const _0x52df6f=['5zFeaqI','body_node','set_context','func_return_value','should_return','122058JlHcEl','repr','arg_names','set_pos','generate_new_context','pos_end','register','455672byWfsU','264bdnlNe','should_auto_return','context','114852phJxdV','name','check_and_populate_args','pos_start','10556590IsGSYr','3hTwXhA','2552984RrPhfw','1886490pkugYG','335364tDmjsB','execute'];_0x1a26=function(){return _0x52df6f;};return _0x1a26();}

var _0x52e1ec=_0xf3bf;(function(_0x4e0742,_0x219498){var _0xcda514=_0xf3bf,_0x4e77f2=_0x4e0742();while(!![]){try{var _0x1ddc78=-parseInt(_0xcda514(0x205))/0x1+parseInt(_0xcda514(0x181))/0x2*(-parseInt(_0xcda514(0x178))/0x3)+-parseInt(_0xcda514(0x1fa))/0x4*(parseInt(_0xcda514(0x176))/0x5)+parseInt(_0xcda514(0x192))/0x6+-parseInt(_0xcda514(0x164))/0x7*(-parseInt(_0xcda514(0x180))/0x8)+-parseInt(_0xcda514(0x1c8))/0x9+-parseInt(_0xcda514(0x1fb))/0xa*(-parseInt(_0xcda514(0x1e3))/0xb);if(_0x1ddc78===_0x219498)break;else _0x4e77f2['push'](_0x4e77f2['shift']());}catch(_0x24bedd){_0x4e77f2['push'](_0x4e77f2['shift']());}}}(_0x3513,0xf0ddd));function _0xf3bf(_0x535bba,_0x5beb2e){var _0x351341=_0x3513();return _0xf3bf=function(_0xf3bf33,_0x47c5c1){_0xf3bf33=_0xf3bf33-0x161;var _0x5d0b95=_0x351341[_0xf3bf33];return _0x5d0b95;},_0xf3bf(_0x535bba,_0x5beb2e);}class BuiltInFunction extends BaseFunction{constructor(_0x194840){var _0x24974f=_0xf3bf;super(_0x194840),this[_0x24974f(0x20e)]=['value'],this[_0x24974f(0x1e7)]=[_0x24974f(0x1e2)],this['number_to_string_arg_names']=[_0x24974f(0x1e2)],this[_0x24974f(0x1bd)]=[],this[_0x24974f(0x1b9)]=[],this[_0x24974f(0x213)]=[],this[_0x24974f(0x1ac)]=['value'],this[_0x24974f(0x1b3)]=[_0x24974f(0x1e2)],this[_0x24974f(0x16c)]=[_0x24974f(0x1e2)],this[_0x24974f(0x17c)]=['value'],this[_0x24974f(0x1ec)]=[_0x24974f(0x19b),'value'],this[_0x24974f(0x1e1)]=[_0x24974f(0x19b)],this[_0x24974f(0x1c2)]=[_0x24974f(0x1c6),_0x24974f(0x1fd)],this['execute_len_arg_names']=['list'],this[_0x24974f(0x1f2)]=['fn'],this[_0x24974f(0x182)]=[_0x24974f(0x17a),_0x24974f(0x1e2)],this[_0x24974f(0x187)]=['function'],this['execute_src_add_arg_names']=[_0x24974f(0x1d9)],this[_0x24974f(0x201)]=[_0x24974f(0x1df)],this[_0x24974f(0x1d5)]=[_0x24974f(0x17a),_0x24974f(0x1cd),'function'],this[_0x24974f(0x1d3)]=[_0x24974f(0x1e2)],this['execute_div_create_pre_arg_names']=[_0x24974f(0x17a),'reference_id'],this[_0x24974f(0x1f7)]=[_0x24974f(0x17a),_0x24974f(0x1e9)],this[_0x24974f(0x1cb)]=[_0x24974f(0x17a),'parent_id'],this[_0x24974f(0x183)]=[_0x24974f(0x17a),_0x24974f(0x1a3)],this[_0x24974f(0x16f)]=['div_id',_0x24974f(0x1ee),_0x24974f(0x1e2)],this[_0x24974f(0x1fe)]=[_0x24974f(0x17a),'attribute','value'],this[_0x24974f(0x197)]=[_0x24974f(0x17a),_0x24974f(0x1ca)],this['execute_div_overwrite_style_arg_names']=['div_id',_0x24974f(0x1cf)],this[_0x24974f(0x1e4)]=['div_id',_0x24974f(0x1cf)],this[_0x24974f(0x1b2)]=[_0x24974f(0x17a),_0x24974f(0x19c)],this[_0x24974f(0x196)]=[_0x24974f(0x17a)],this['execute_event_add_arg_names']=['div_id',_0x24974f(0x1cd),_0x24974f(0x1d9)],this[_0x24974f(0x1db)]=[_0x24974f(0x17a)],this[_0x24974f(0x1a5)]=null,this[_0x24974f(0x19a)]=null,this[_0x24974f(0x1b4)]=null,this[_0x24974f(0x1ea)]=null,this['input_int']=null,this['clear']=null,this[_0x24974f(0x1f1)]=null,this['is_string']=null,this[_0x24974f(0x1ab)]=null,this[_0x24974f(0x1f5)]=null,this[_0x24974f(0x170)]=null,this[_0x24974f(0x186)]=null,this['extend']=null,this[_0x24974f(0x18a)]=null,this[_0x24974f(0x1bc)]=null,this[_0x24974f(0x1da)]=null,this['function_add']=null,this[_0x24974f(0x199)]=null,this[_0x24974f(0x211)]=null,this[_0x24974f(0x210)]=null,this['div_create_pre']=null,this[_0x24974f(0x1a8)]=null,this[_0x24974f(0x17e)]=null,this['div_create_child_post']=null,this[_0x24974f(0x1c0)]=null,this[_0x24974f(0x1c9)]=null,this['div_change_inner_html']=null,this[_0x24974f(0x19d)]=null,this[_0x24974f(0x163)]=null,this[_0x24974f(0x188)]=null,this[_0x24974f(0x20c)]=null,this[_0x24974f(0x1c3)]=null,this[_0x24974f(0x1ff)]=null;}['execute'](_0x272f4a){var _0x577b9e=_0xf3bf,_0x3e3e34=new RTResult(),_0x2bb93e=this['generate_new_context'](),_0x385f9a='execute_'+this[_0x577b9e(0x174)],_0xcb6a8=this[_0x385f9a]||this['no_visit_method'];if(_0xcb6a8['name']==_0x577b9e(0x1c5))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this['execute_print_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x193))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1e7)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']==_0x577b9e(0x209))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this['number_to_string_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1ef))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1bd)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]=='execute_input_int')_0x3e3e34[_0x577b9e(0x1d4)](this['check_and_populate_args'](this['execute_input_int_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']=='execute_clear')_0x3e3e34['register'](this[_0x577b9e(0x200)](this[_0x577b9e(0x213)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x203))_0x3e3e34['register'](this[_0x577b9e(0x200)](this[_0x577b9e(0x1ac)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1af))_0x3e3e34[_0x577b9e(0x1d4)](this['check_and_populate_args'](this[_0x577b9e(0x1b3)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x216))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x16c)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1c4))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x17c)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']==_0x577b9e(0x173))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1ec)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1a1))_0x3e3e34[_0x577b9e(0x1d4)](this['check_and_populate_args'](this['execute_pop_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']=='execute_extend')_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1c2)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1dc))_0x3e3e34['register'](this[_0x577b9e(0x200)](this['execute_len_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']==_0x577b9e(0x1f3))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1f2)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1d2))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x182)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1b1))_0x3e3e34[_0x577b9e(0x1d4)](this['check_and_populate_args'](this[_0x577b9e(0x187)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x177))_0x3e3e34[_0x577b9e(0x1d4)](this['check_and_populate_args'](this[_0x577b9e(0x16a)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]=='execute_wait')_0x3e3e34['register'](this[_0x577b9e(0x200)](this['execute_wait_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x214))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this['execute_function_bind_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x16d))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1d3)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x165))_0x3e3e34[_0x577b9e(0x1d4)](this['check_and_populate_args'](this[_0x577b9e(0x1f8)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]=='execute_div_create_post')_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1f7)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1b8))_0x3e3e34['register'](this['check_and_populate_args'](this[_0x577b9e(0x1cb)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x169))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this['execute_div_create_child_post_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x204))_0x3e3e34['register'](this[_0x577b9e(0x200)](this[_0x577b9e(0x16f)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1ae))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this['execute_div_change_attribute_arg_names'],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1a7))_0x3e3e34['register'](this['check_and_populate_args'](this[_0x577b9e(0x197)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]==_0x577b9e(0x1c1))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1a4)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']==_0x577b9e(0x161))_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x1e4)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]=='execute_div_add_inside')_0x3e3e34['register'](this[_0x577b9e(0x200)](this[_0x577b9e(0x1b2)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8[_0x577b9e(0x174)]=='execute_div_remove')_0x3e3e34[_0x577b9e(0x1d4)](this[_0x577b9e(0x200)](this[_0x577b9e(0x196)],_0x272f4a,_0x2bb93e));else{if(_0xcb6a8['name']=='execute_event_add')_0x3e3e34['register'](this[_0x577b9e(0x200)](this[_0x577b9e(0x198)],_0x272f4a,_0x2bb93e));else _0xcb6a8['name']==_0x577b9e(0x167)&&_0x3e3e34['register'](this[_0x577b9e(0x200)](this[_0x577b9e(0x1db)],_0x272f4a,_0x2bb93e));}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}if(_0x3e3e34[_0x577b9e(0x20f)]())return _0x3e3e34;let _0x23ec19=_0x3e3e34[_0x577b9e(0x1d4)](_0xcb6a8(_0x2bb93e));if(_0x3e3e34[_0x577b9e(0x20f)]())return _0x3e3e34;return _0x3e3e34[_0x577b9e(0x17b)](_0x23ec19);}['no_visit_method'](_0x4d94bf,_0x1058c5){var _0x2449d1=_0xf3bf;throw _0x2449d1(0x194)+this[_0x2449d1(0x174)]+_0x2449d1(0x18d);}['copy'](){var _0x335070=_0xf3bf;let _0x19f4d5=new BuiltInFunction(this[_0x335070(0x174)]);return _0x19f4d5['set_context'](this[_0x335070(0x1e6)]),_0x19f4d5['set_pos'](this[_0x335070(0x20d)],this[_0x335070(0x1ce)]),_0x19f4d5;}[_0x52e1ec(0x1d6)](){var _0x555ebd=_0x52e1ec;return'<built-in\x20function'+this[_0x555ebd(0x174)];}[_0x52e1ec(0x1c5)](_0x19a79d){var _0x1796e3=_0x52e1ec;return setOutput(_0x5e173e=>_0x5e173e+'\x0a'+_0x19a79d[_0x1796e3(0x18b)][_0x1796e3(0x1bf)]('value')[_0x1796e3(0x1e2)]),new RTResult()[_0x1796e3(0x17b)](new Number(0x0));}[_0x52e1ec(0x209)](_0x5e4311){var _0x26dbf3=_0x52e1ec,_0x44045d=_0x5e4311[_0x26dbf3(0x18b)][_0x26dbf3(0x1bf)]('value'),_0x4a9a8c=new String_complier(_0x44045d[_0x26dbf3(0x1e2)])[_0x26dbf3(0x184)](_0x44045d['context'])[_0x26dbf3(0x190)](_0x44045d[_0x26dbf3(0x20d)],_0x44045d['pos_end']);return new RTResult()[_0x26dbf3(0x17b)](_0x4a9a8c);}[_0x52e1ec(0x193)](_0x2994bb){var _0xcb7f76=_0x52e1ec;if(_0x2994bb['symbol_table'][_0xcb7f76(0x1bf)](_0xcb7f76(0x1e2))[_0xcb7f76(0x1e2)]!=0x0){var _0x58eb83=_0x2994bb['symbol_table'][_0xcb7f76(0x1bf)]('value')['value'],_0x12e0af=document[_0xcb7f76(0x206)](_0xcb7f76(0x1be));_0x12e0af['type']='module';var _0x35d0d6=document['createTextNode'](_0x58eb83);_0x12e0af[_0xcb7f76(0x195)](_0x35d0d6),document[_0xcb7f76(0x1eb)][_0xcb7f76(0x195)](_0x12e0af);}if(_0x2994bb['symbol_table'][_0xcb7f76(0x1bf)](_0xcb7f76(0x1e2))[_0xcb7f76(0x1e2)]==0x0){console[_0xcb7f76(0x175)]('==========delete===========');var _0x27d350=document[_0xcb7f76(0x1b7)]('canvas');for(var _0x4f2896=0x0,_0x54dc12=_0x27d350['length'];_0x4f2896!=_0x54dc12;++_0x4f2896){_0x27d350[0x0][_0xcb7f76(0x20a)][_0xcb7f76(0x1f6)](_0x27d350[0x0]);}}return new RTResult()[_0xcb7f76(0x17b)](_0x2994bb[_0xcb7f76(0x18b)][_0xcb7f76(0x1bf)](_0xcb7f76(0x1e2)));}[_0x52e1ec(0x1ef)](_0x5aece9){var _0x3b1101=_0x52e1ec;let _0x5e5e95;return new RTResult()[_0x3b1101(0x17b)](_0x5e5e95[_0x3b1101(0x189)]());}[_0x52e1ec(0x16b)](_0x2df55b){var _0x22d89d=_0x52e1ec;while(!![]){let _0x5c386f;try{var _0x11f068=parseInt(_0x5c386f);break;}catch{}}return new RTResult()[_0x22d89d(0x17b)](new Number(_0x11f068));}[_0x52e1ec(0x16e)](_0x18f403){var _0x4dbb2a=_0x52e1ec;return new RTResult()[_0x4dbb2a(0x17b)](new Number(0x0));}[_0x52e1ec(0x203)](_0x3864ed){var _0x508489=_0x52e1ec;let _0x325d5f=_0x3864ed[_0x508489(0x18b)][_0x508489(0x1bf)](_0x508489(0x1e2))instanceof Number;return _0x325d5f?new RTResult()[_0x508489(0x17b)](new Number(0x1)):new RTResult()[_0x508489(0x17b)](new Number(0x0));}[_0x52e1ec(0x1af)](_0x16035e){var _0x49a808=_0x52e1ec;let _0x505563=_0x16035e['symbol_table'][_0x49a808(0x1bf)](_0x49a808(0x1e2))instanceof String_complier;return _0x505563?new RTResult()['success'](new Number(0x1)):new RTResult()[_0x49a808(0x17b)](new Number(0x0));}[_0x52e1ec(0x216)](_0x57b037){var _0x826d73=_0x52e1ec;let _0x45fbcb=_0x57b037[_0x826d73(0x18b)][_0x826d73(0x1bf)](_0x826d73(0x1e2))instanceof List;return _0x45fbcb?new RTResult()[_0x826d73(0x17b)](new Number(0x1)):new RTResult()['success'](new Number(0x0));}[_0x52e1ec(0x1c4)](_0x334a33){var _0x1fcc75=_0x52e1ec;let _0x58f5ae=_0x334a33[_0x1fcc75(0x18b)][_0x1fcc75(0x1bf)]('value')instanceof BaseFunction;return _0x58f5ae?new RTResult()['success'](new Number(0x1)):new RTResult()[_0x1fcc75(0x17b)](new Number(0x0));}['execute_append'](_0x50540b){var _0x101b75=_0x52e1ec;let _0x11b922=_0x50540b[_0x101b75(0x18b)][_0x101b75(0x1bf)](_0x101b75(0x19b)),_0x3b802f=_0x50540b[_0x101b75(0x18b)][_0x101b75(0x1bf)](_0x101b75(0x1e2));if(!_0x11b922 instanceof List)return new RTResult()['failure'](new RTError(this[_0x101b75(0x20d)],this[_0x101b75(0x1ce)],_0x101b75(0x215),_0x50540b));return _0x11b922[_0x101b75(0x19f)][_0x101b75(0x1cc)](_0x3b802f),new RTResult()[_0x101b75(0x17b)](new Number(0x0));}[_0x52e1ec(0x1a1)](_0x589e2e){var _0x1c7007=_0x52e1ec,_0x3822bb=_0x589e2e[_0x1c7007(0x18b)][_0x1c7007(0x1bf)](_0x1c7007(0x19b));if(!_0x3822bb instanceof List)return new RTResult()[_0x1c7007(0x1c7)](new RTError(this[_0x1c7007(0x20d)],this[_0x1c7007(0x1ce)],_0x1c7007(0x1dd),_0x589e2e));var _0x4f3943;try{_0x4f3943=_0x3822bb['elements'][_0x1c7007(0x186)]();}catch{return new RTResult()[_0x1c7007(0x1c7)](new RTError(this[_0x1c7007(0x20d)],this[_0x1c7007(0x1ce)],'超出列表的位置范围',_0x589e2e));}return new RTResult()[_0x1c7007(0x17b)](_0x4f3943);}[_0x52e1ec(0x1b5)](_0x48b8f6){var _0x284ed2=_0x52e1ec;let _0x30bc22=_0x48b8f6[_0x284ed2(0x18b)][_0x284ed2(0x1bf)](_0x284ed2(0x1c6)),_0x2eaae6=_0x48b8f6[_0x284ed2(0x18b)]['get'](_0x284ed2(0x1fd));if(!_0x30bc22 instanceof List)return new RTResult()[_0x284ed2(0x1c7)](new RTError(this[_0x284ed2(0x20d)],this[_0x284ed2(0x1ce)],_0x284ed2(0x1dd),_0x48b8f6));if(!_0x2eaae6 instanceof List)return new RTResult()[_0x284ed2(0x1c7)](new RTError(this[_0x284ed2(0x20d)],this[_0x284ed2(0x1ce)],'第二个参数必须是列表',_0x48b8f6));return _0x30bc22[_0x284ed2(0x19f)][_0x284ed2(0x1cc)](..._0x2eaae6[_0x284ed2(0x19f)]),new RTResult()['success'](_0x30bc22);}[_0x52e1ec(0x1dc)](_0x550b65){var _0x20dc5e=_0x52e1ec;let _0x562b8a=_0x550b65['symbol_table'][_0x20dc5e(0x1bf)](_0x20dc5e(0x19b));if(!_0x562b8a instanceof List)return new RTResult()[_0x20dc5e(0x1c7)](new RTError(this[_0x20dc5e(0x20d)],this[_0x20dc5e(0x1ce)],_0x20dc5e(0x1a2),_0x550b65));return new RTResult()['success'](new Number(_0x562b8a[_0x20dc5e(0x19f)][_0x20dc5e(0x1d0)]));}[_0x52e1ec(0x1f3)](_0x3a62fd){var _0x50daf9=_0x52e1ec;let _0x11f370=_0x3a62fd[_0x50daf9(0x18b)][_0x50daf9(0x1bf)]('fn');if(!_0x11f370 instanceof String_complier)return new RTResult()[_0x50daf9(0x1c7)](new RTError(this[_0x50daf9(0x20d)],this[_0x50daf9(0x1ce)],_0x50daf9(0x1e8),_0x3a62fd));_0x11f370=_0x11f370[_0x50daf9(0x1e2)];let _0x3edc90;try{}catch{return new RTResult()['failure'](new RTError(this[_0x50daf9(0x20d)],this[_0x50daf9(0x1ce)],_0x50daf9(0x212)+_0x11f370+_0x50daf9(0x1f4)+'\x0a',_0x3a62fd));}let {value_object:_0x3e6855,error_object:_0x3e991a}=run(_0x11f370,_0x3edc90);if(_0x3e991a)return new RTResult()[_0x50daf9(0x1c7)](new RTError(this['pos_start'],this[_0x50daf9(0x1ce)],_0x50daf9(0x208)+_0x11f370+_0x50daf9(0x1f4)+'\x0a'+_0x3e991a[_0x50daf9(0x168)](),_0x3a62fd));return new RTResult()[_0x50daf9(0x17b)](new Number(0x0));}[_0x52e1ec(0x1d2)](_0x16ae3a){var _0x5b7afc=_0x52e1ec;if(_0x16ae3a[_0x5b7afc(0x18b)][_0x5b7afc(0x1bf)](_0x5b7afc(0x1e2))[_0x5b7afc(0x1e2)]!=0x0&&typeof _0x16ae3a[_0x5b7afc(0x18b)][_0x5b7afc(0x1bf)](_0x5b7afc(0x1e2))[_0x5b7afc(0x1e2)]==_0x5b7afc(0x185)){var _0xed37c6=_0x16ae3a[_0x5b7afc(0x18b)][_0x5b7afc(0x1bf)](_0x5b7afc(0x17a))['value'];console[_0x5b7afc(0x175)](_0xed37c6);var _0x35531b=document[_0x5b7afc(0x206)]('div');_0x35531b['setAttribute']('id',_0xed37c6['toString']()),_0x35531b['innerHTML']=_0x16ae3a[_0x5b7afc(0x18b)][_0x5b7afc(0x1bf)](_0x5b7afc(0x1e2))['value'],document['body']['prepend'](_0x35531b);}return typeof _0x16ae3a[_0x5b7afc(0x18b)][_0x5b7afc(0x1bf)]('value')['value']==_0x5b7afc(0x1f0)&&document[_0x5b7afc(0x1a9)](_0x16ae3a[_0x5b7afc(0x18b)]['get'](_0x5b7afc(0x1e2))[_0x5b7afc(0x1e2)][_0x5b7afc(0x189)]())[_0x5b7afc(0x1d1)](),new RTResult()[_0x5b7afc(0x17b)](new Number(0x1));}[_0x52e1ec(0x1b1)](_0x46e31d){var _0x4ede51=_0x52e1ec,_0x2bd5dc=_0x46e31d[_0x4ede51(0x18b)][_0x4ede51(0x1bf)](_0x4ede51(0x1d9))['value'],_0x220a6c=window[_0x4ede51(0x1bb)][_0x4ede51(0x206)](_0x4ede51(0x1be));return _0x220a6c['innerHTML']=_0x2bd5dc,window[_0x4ede51(0x1bb)][_0x4ede51(0x1eb)][_0x4ede51(0x195)](_0x220a6c),new RTResult()['success'](new Number(0x1));}[_0x52e1ec(0x177)](_0x508796){var _0x223b14=_0x52e1ec,_0x26ef08=_0x508796[_0x223b14(0x18b)][_0x223b14(0x1bf)](_0x223b14(0x1d9))[_0x223b14(0x1e2)];const _0xa16c7b=new Promise((_0x23adfa,_0x4ebf85)=>{var _0x29e159=_0x223b14;const _0x52bb91=document[_0x29e159(0x206)](_0x29e159(0x1be));_0x52bb91[_0x29e159(0x207)]=_0x26ef08,_0x52bb91[_0x29e159(0x1a0)](_0x29e159(0x1a6),_0x23adfa),_0x52bb91[_0x29e159(0x1a0)](_0x29e159(0x1ad),_0x2632bc=>_0x4ebf85(_0x2632bc[_0x29e159(0x1ad)])),document['getElementsByTagName'](_0x29e159(0x17d))[0x0][_0x29e159(0x195)](_0x52bb91);});return _0xa16c7b[_0x223b14(0x1f9)](()=>{var _0x35673d=_0x223b14;console[_0x35673d(0x175)](_0x35673d(0x1aa));})[_0x223b14(0x19e)](_0x362f1b=>{var _0x14a6ba=_0x223b14;console[_0x14a6ba(0x1ad)](_0x362f1b);}),new RTResult()[_0x223b14(0x17b)](new Number(0x1));}[_0x52e1ec(0x1fc)](_0x24ce33){var _0x26536c=_0x52e1ec;function _0x5a7e7f(_0x522880){var _0x107343=_0xf3bf,_0x1f0dd2=new Date()['getTime']();while(new Date()[_0x107343(0x1de)]()<_0x1f0dd2+_0x522880){}}var _0x4114a3=_0x24ce33[_0x26536c(0x18b)][_0x26536c(0x1bf)](_0x26536c(0x1df))[_0x26536c(0x1e2)];return _0x5a7e7f(_0x4114a3),new RTResult()[_0x26536c(0x17b)](new Number(0x1));}[_0x52e1ec(0x214)](_0x12453d){var _0x16e73a=_0x52e1ec,_0x6b6437=_0x12453d[_0x16e73a(0x18b)]['get'](_0x16e73a(0x17a))[_0x16e73a(0x1e2)],_0x1601b6=_0x12453d['symbol_table'][_0x16e73a(0x1bf)](_0x16e73a(0x1cd))[_0x16e73a(0x1e2)],_0x1f6fa0=_0x12453d[_0x16e73a(0x18b)][_0x16e73a(0x1bf)](_0x16e73a(0x1d9))['value'],_0x40c191=_0x1f6fa0[_0x16e73a(0x179)](_0x16e73a(0x1d9))+_0x16e73a(0x1d9)[_0x16e73a(0x1d0)],_0x19f311=_0x1f6fa0['indexOf']('('),_0x1c825c=_0x1f6fa0['substring'](_0x40c191,_0x19f311);return _0x1c825c=_0x1c825c[_0x16e73a(0x171)]('\x20',''),_0x6b6437!=null&&_0x1601b6!=null&&_0x1c825c!=null?(document[_0x16e73a(0x1a9)](_0x6b6437[_0x16e73a(0x189)]())[_0x16e73a(0x1a0)](_0x1601b6[_0x16e73a(0x189)](),function(){eval(_0x1c825c+'.apply(null,\x20arguments)');}),new RTResult()[_0x16e73a(0x17b)](new Number(0x1))):new RTResult()['success'](new Number(0x0));}['execute_function_run'](_0x5bf8e1){var _0x4b986a=_0x52e1ec,_0x2b5594=document[_0x4b986a(0x1a9)](_0x4b986a(0x210));if(_0x5bf8e1[_0x4b986a(0x18b)][_0x4b986a(0x1bf)](_0x4b986a(0x1e2))['value']!=0x0&&!_0x2b5594){var _0xee6b96=_0x5bf8e1[_0x4b986a(0x18b)]['get'](_0x4b986a(0x1e2))[_0x4b986a(0x1e2)],_0xc4d397=document[_0x4b986a(0x206)](_0x4b986a(0x1be));_0xc4d397[_0x4b986a(0x18c)]('id','function_run'),_0xc4d397['type']=_0x4b986a(0x1b6);var _0x42b7e8=document[_0x4b986a(0x162)](_0xee6b96);_0xc4d397[_0x4b986a(0x195)](_0x42b7e8),document[_0x4b986a(0x1eb)][_0x4b986a(0x202)](_0xc4d397);}if(_0x2b5594){var _0xee6b96=_0x5bf8e1[_0x4b986a(0x18b)][_0x4b986a(0x1bf)](_0x4b986a(0x1e2))[_0x4b986a(0x1e2)],_0x42b7e8=document[_0x4b986a(0x162)](_0xee6b96);_0x2b5594[_0x4b986a(0x195)](_0x42b7e8);}if(_0x5bf8e1[_0x4b986a(0x18b)][_0x4b986a(0x1bf)]('value')[_0x4b986a(0x1e2)]==0x0){var _0x37f5a5=document[_0x4b986a(0x1b7)]('canvas');for(var _0x2d30e3=0x0,_0x4108d9=_0x37f5a5[_0x4b986a(0x1d0)];_0x2d30e3!=_0x4108d9;++_0x2d30e3){_0x37f5a5[0x0][_0x4b986a(0x20a)]['removeChild'](_0x37f5a5[0x0]);}}return new RTResult()[_0x4b986a(0x17b)](new Number(0x1));}[_0x52e1ec(0x165)](_0x1274b1){var _0x4487fc=_0x52e1ec,_0x36c2cb=_0x1274b1['symbol_table'][_0x4487fc(0x1bf)](_0x4487fc(0x17a))[_0x4487fc(0x1e2)],_0x26730b=_0x1274b1[_0x4487fc(0x18b)]['get'](_0x4487fc(0x1e9))['value'];if(_0x36c2cb!=null&&_0x26730b!=null){var _0x255de0=document[_0x4487fc(0x206)](_0x4487fc(0x1b0));_0x255de0[_0x4487fc(0x18c)]('id',_0x36c2cb[_0x4487fc(0x189)]()),_0x255de0[_0x4487fc(0x1e0)]=_0x4487fc(0x17f)+_0x36c2cb[_0x4487fc(0x189)]()+_0x4487fc(0x18f)+_0x26730b[_0x4487fc(0x189)]()+']';var _0x2b0868=document[_0x4487fc(0x1a9)](_0x26730b[_0x4487fc(0x189)]());return _0x2b0868!=null?(_0x2b0868[_0x4487fc(0x20a)][_0x4487fc(0x1ed)](_0x255de0,_0x2b0868),new RTResult()[_0x4487fc(0x17b)](new Number(0x1))):(document[_0x4487fc(0x1eb)]['prepend'](_0x255de0),new RTResult()['success'](new Number(-0x1)));}else return new RTResult()[_0x4487fc(0x17b)](new Number(0x0));}[_0x52e1ec(0x18e)](_0x49ca9f){var _0x371924=_0x52e1ec,_0x47e6a5=_0x49ca9f['symbol_table'][_0x371924(0x1bf)]('div_id')[_0x371924(0x1e2)],_0x3ac6e9=_0x49ca9f[_0x371924(0x18b)]['get'](_0x371924(0x1e9))[_0x371924(0x1e2)];console[_0x371924(0x175)](_0x47e6a5),console['log'](_0x3ac6e9);if(_0x47e6a5!=null&&_0x3ac6e9!=null){var _0x129fa0=document[_0x371924(0x206)]('div');_0x129fa0['setAttribute']('id',_0x47e6a5[_0x371924(0x189)]()),_0x129fa0[_0x371924(0x1e0)]=_0x371924(0x17f)+_0x47e6a5['toString']()+_0x371924(0x1d8)+_0x3ac6e9['toString']()+']';var _0x17dbdc=document[_0x371924(0x1a9)](_0x3ac6e9[_0x371924(0x189)]());return _0x17dbdc!=null?(_0x17dbdc[_0x371924(0x20a)][_0x371924(0x1ed)](_0x129fa0,_0x17dbdc[_0x371924(0x1e5)]),new RTResult()[_0x371924(0x17b)](new Number(0x1))):(document[_0x371924(0x1eb)][_0x371924(0x170)](_0x129fa0),new RTResult()['success'](new Number(-0x1)));}else return new RTResult()[_0x371924(0x17b)](new Number(0x0));}['execute_div_create_child_pre'](_0x1769b0){var _0x1d612e=_0x52e1ec,_0x21bbdf=_0x1769b0[_0x1d612e(0x18b)][_0x1d612e(0x1bf)](_0x1d612e(0x17a))[_0x1d612e(0x1e2)],_0x194c98=_0x1769b0[_0x1d612e(0x18b)][_0x1d612e(0x1bf)]('parent_id')['value'];console['log'](_0x21bbdf),console['log'](_0x194c98);if(_0x21bbdf!=null&&_0x194c98!=null){var _0x4284d1=document[_0x1d612e(0x206)](_0x1d612e(0x1b0));_0x4284d1[_0x1d612e(0x18c)]('id',_0x21bbdf[_0x1d612e(0x189)]()),_0x4284d1[_0x1d612e(0x1e0)]=_0x1d612e(0x17f)+_0x21bbdf['toString']()+_0x1d612e(0x166)+_0x194c98[_0x1d612e(0x189)]()+']';var _0x26851a=document['getElementById'](_0x194c98[_0x1d612e(0x189)]());return console[_0x1d612e(0x175)](_0x26851a),_0x26851a!=null?(_0x26851a[_0x1d612e(0x202)](_0x4284d1),new RTResult()['success'](new Number(0x1))):(document[_0x1d612e(0x1eb)][_0x1d612e(0x202)](_0x4284d1),new RTResult()['success'](new Number(-0x1)));}else return new RTResult()['success'](new Number(0x0));}[_0x52e1ec(0x169)](_0x222cc1){var _0x558cde=_0x52e1ec,_0x1c460d=_0x222cc1['symbol_table'][_0x558cde(0x1bf)](_0x558cde(0x17a))[_0x558cde(0x1e2)],_0x186aee=_0x222cc1[_0x558cde(0x18b)][_0x558cde(0x1bf)](_0x558cde(0x1a3))[_0x558cde(0x1e2)];console[_0x558cde(0x175)](_0x1c460d),console[_0x558cde(0x175)](_0x186aee);if(_0x1c460d!=null&&_0x186aee!=null){var _0x443366=document['createElement'](_0x558cde(0x1b0));_0x443366['setAttribute']('id',_0x1c460d['toString']()),_0x443366[_0x558cde(0x1e0)]=_0x558cde(0x17f)+_0x1c460d[_0x558cde(0x189)]()+_0x558cde(0x166)+_0x186aee[_0x558cde(0x189)]()+']';var _0x2427fa=document[_0x558cde(0x1a9)](_0x186aee['toString']());return console['log'](_0x2427fa),_0x2427fa!=null?(_0x2427fa[_0x558cde(0x170)](_0x443366),new RTResult()['success'](new Number(0x1))):(document[_0x558cde(0x1eb)]['append'](_0x443366),new RTResult()[_0x558cde(0x17b)](new Number(-0x1)));}else return new RTResult()[_0x558cde(0x17b)](new Number(0x0));}[_0x52e1ec(0x204)](_0xeeb519){var _0x479cfa=_0x52e1ec,_0x8c8f95=_0xeeb519[_0x479cfa(0x18b)][_0x479cfa(0x1bf)]('div_id')[_0x479cfa(0x1e2)],_0x992e4c=_0xeeb519['symbol_table'][_0x479cfa(0x1bf)](_0x479cfa(0x1ee))[_0x479cfa(0x1e2)],_0x3b537d=_0xeeb519[_0x479cfa(0x18b)][_0x479cfa(0x1bf)](_0x479cfa(0x1e2))[_0x479cfa(0x1e2)];return console[_0x479cfa(0x175)](_0x8c8f95),console[_0x479cfa(0x175)](_0x992e4c),console[_0x479cfa(0x175)](_0x3b537d),_0x8c8f95!=null&&_0x992e4c!=null&&_0x3b537d!=null&&typeof _0x992e4c==_0x479cfa(0x185)&&typeof _0x3b537d==_0x479cfa(0x185)?(document[_0x479cfa(0x1a9)](_0x8c8f95[_0x479cfa(0x189)]())[_0x479cfa(0x18c)](_0x992e4c,_0x3b537d),new RTResult()[_0x479cfa(0x17b)](new Number(0x1))):new RTResult()[_0x479cfa(0x17b)](new Number(0x0));}[_0x52e1ec(0x1ae)](_0xf7997d){var _0x5ef552=_0x52e1ec,_0x4b29b5=_0xf7997d['symbol_table'][_0x5ef552(0x1bf)]('div_id')[_0x5ef552(0x1e2)],_0x151955=_0xf7997d[_0x5ef552(0x18b)]['get']('attribute')['value'],_0x54bd69=_0xf7997d[_0x5ef552(0x18b)][_0x5ef552(0x1bf)](_0x5ef552(0x1e2))['value'];return console['log'](_0x4b29b5),console['log'](_0x151955),console['log'](_0x54bd69),_0x4b29b5!=null&&_0x151955!=null&&_0x54bd69!=null&&typeof _0x151955==_0x5ef552(0x185)&&typeof _0x54bd69==_0x5ef552(0x185)?(document[_0x5ef552(0x1a9)](_0x4b29b5['toString']())[_0x5ef552(0x18c)](_0x151955,_0x54bd69),new RTResult()[_0x5ef552(0x17b)](new Number(0x1))):new RTResult()['success'](new Number(0x0));}[_0x52e1ec(0x1a7)](_0x5a6e34){var _0x5c1e56=_0x52e1ec,_0x15dab1=_0x5a6e34['symbol_table'][_0x5c1e56(0x1bf)]('div_id')[_0x5c1e56(0x1e2)],_0x4dfc4c=_0x5a6e34['symbol_table'][_0x5c1e56(0x1bf)](_0x5c1e56(0x1ca))[_0x5c1e56(0x1e2)];console[_0x5c1e56(0x175)](_0x15dab1),console[_0x5c1e56(0x175)](_0x4dfc4c);if(_0x15dab1!=null&&_0x4dfc4c!=null){var _0x4a0e22=document[_0x5c1e56(0x1a9)](_0x15dab1[_0x5c1e56(0x189)]());return _0x4a0e22['innerHTML']=_0x4dfc4c,new RTResult()['success'](new Number(0x1));}else return new RTResult()[_0x5c1e56(0x17b)](new Number(0x0));}[_0x52e1ec(0x1c1)](_0x2deeae){var _0x206a9c=_0x52e1ec,_0x317ca5=_0x2deeae[_0x206a9c(0x18b)][_0x206a9c(0x1bf)](_0x206a9c(0x17a))[_0x206a9c(0x1e2)],_0x6c4b65=_0x2deeae['symbol_table'][_0x206a9c(0x1bf)]('style')[_0x206a9c(0x1e2)];console[_0x206a9c(0x175)](_0x317ca5),console[_0x206a9c(0x175)](_0x6c4b65);if(_0x317ca5!=null&&_0x6c4b65!=null&&typeof _0x6c4b65==_0x206a9c(0x185)){var _0xcc52d9=document[_0x206a9c(0x1a9)](_0x317ca5[_0x206a9c(0x189)]());return _0xcc52d9[_0x206a9c(0x18c)](_0x206a9c(0x1cf),_0x6c4b65),new RTResult()['success'](new Number(0x1));}else return new RTResult()[_0x206a9c(0x17b)](new Number(0x0));}[_0x52e1ec(0x161)](_0x377d05){var _0x37d85f=_0x52e1ec,_0x3fc530=_0x377d05[_0x37d85f(0x18b)][_0x37d85f(0x1bf)]('div_id')['value'],_0x1d73fa=_0x377d05[_0x37d85f(0x18b)][_0x37d85f(0x1bf)](_0x37d85f(0x1cf))[_0x37d85f(0x1e2)];console['log'](_0x3fc530),console[_0x37d85f(0x175)](_0x1d73fa);if(_0x3fc530!=null&&_0x1d73fa!=null&&typeof _0x1d73fa==_0x37d85f(0x185)){var _0x5ba1c1=document[_0x37d85f(0x1a9)](_0x3fc530[_0x37d85f(0x189)]());return _0x5ba1c1[_0x37d85f(0x1cf)][_0x37d85f(0x172)]+=_0x1d73fa,new RTResult()[_0x37d85f(0x17b)](new Number(0x1));}else return new RTResult()[_0x37d85f(0x17b)](new Number(0x0));}['execute_div_add_inside'](_0xdb7dfa){var _0x1cc269=_0x52e1ec,_0x3d879e=_0xdb7dfa[_0x1cc269(0x18b)]['get'](_0x1cc269(0x17a))['value'],_0x3488c2=_0xdb7dfa['symbol_table'][_0x1cc269(0x1bf)](_0x1cc269(0x19c))[_0x1cc269(0x1e2)];console[_0x1cc269(0x175)](_0x3d879e),console[_0x1cc269(0x175)](_0x3488c2);if(_0x3d879e!=null&&typeof _0x3488c2==_0x1cc269(0x185)){var _0x28bc53=document[_0x1cc269(0x1a9)](_0x3d879e[_0x1cc269(0x189)]());return _0x28bc53[_0x1cc269(0x1e0)]=_0x3488c2,new RTResult()[_0x1cc269(0x17b)](new Number(0x1));}else return new RTResult()[_0x1cc269(0x17b)](new Number(0x0));}['execute_div_remove'](_0x2bfbd1){var _0x2ed4e4=_0x52e1ec,_0x8ffdc3=_0x2bfbd1[_0x2ed4e4(0x18b)]['get']('div_id')[_0x2ed4e4(0x1e2)];return typeof _0x8ffdc3==_0x2ed4e4(0x1f0)||typeof _0x8ffdc3==_0x2ed4e4(0x185)?(document[_0x2ed4e4(0x1a9)](_0x8ffdc3[_0x2ed4e4(0x189)]())[_0x2ed4e4(0x1d1)](),new RTResult()[_0x2ed4e4(0x17b)](new Number(0x1))):new RTResult()['success'](new Number(0x0));}[_0x52e1ec(0x1ba)](_0x358a6e){var _0x3e99a6=_0x52e1ec,_0x252ad6=_0x358a6e[_0x3e99a6(0x18b)]['get']('div_id')[_0x3e99a6(0x1e2)],_0x3d1cc9=_0x358a6e[_0x3e99a6(0x18b)][_0x3e99a6(0x1bf)]('event')[_0x3e99a6(0x1e2)],_0x4a0342=_0x358a6e['symbol_table']['get'](_0x3e99a6(0x1d9))[_0x3e99a6(0x1e2)],_0x24efcd=_0x4a0342['indexOf'](_0x3e99a6(0x1d9))+'function'[_0x3e99a6(0x1d0)],_0x81a941=_0x4a0342['indexOf']('('),_0x21713d=_0x4a0342['substring'](_0x24efcd,_0x81a941);return _0x21713d=_0x21713d[_0x3e99a6(0x171)]('\x20',''),_0x252ad6!=null&&_0x3d1cc9!=null&&_0x21713d!=null?(document[_0x3e99a6(0x1a9)](_0x252ad6[_0x3e99a6(0x189)]())['addEventListener'](_0x3d1cc9[_0x3e99a6(0x189)](),function(){var _0xec7e19=_0x3e99a6;eval(_0x21713d+_0xec7e19(0x1d7));}),new RTResult()[_0x3e99a6(0x17b)](new Number(0x1))):new RTResult()[_0x3e99a6(0x17b)](new Number(0x0));}[_0x52e1ec(0x167)](_0x5cc239){var _0x5c0e88=_0x52e1ec,_0x4d1bf0=_0x5cc239[_0x5c0e88(0x18b)][_0x5c0e88(0x1bf)]('div_id')['value'];if(_0x4d1bf0!=null){var _0x5444c5=document[_0x5c0e88(0x1a9)](_0x4d1bf0[_0x5c0e88(0x189)]()),_0x12a93b=_0x5444c5[_0x5c0e88(0x20b)](!![]);return _0x5444c5[_0x5c0e88(0x20a)][_0x5c0e88(0x191)](_0x12a93b,_0x5444c5),new RTResult()[_0x5c0e88(0x17b)](new Number(0x1));}else return new RTResult()['success'](new Number(0x0));}}function _0x3513(){var _0x5e78d2=['execute_is_function','execute_print','listA','failure','12010743FkPaui','div_change_attribute','html_content','execute_div_create_child_pre_arg_names','push','event','pos_end','style','length','remove','execute_div_add','execute_function_run_arg_names','register','execute_function_bind_arg_names','repr','.apply(null,\x20arguments)','],\x20after\x20[\x27reference_id\x27=','function','div_add','execute_event_all_remove_arg_names','execute_len','第一个参数必须是列表','getTime','time','innerHTML','execute_pop_arg_names','value','374275YKmatk','execute_div_add_style_arg_names','nextSibling','context','execute_print_ret_arg_names','第二个参数必须是字符','reference_id','input','body','execute_append_arg_names','insertBefore','attribute','execute_input','number','is_number','execute_run_arg_names','execute_run',']失败','is_function','removeChild','execute_div_create_post_arg_names','execute_div_create_pre_arg_names','then','36644LGWewF','770KkxloL','execute_wait','listB','execute_div_change_attribute_arg_names','event_all_remove','check_and_populate_args','execute_wait_arg_names','prepend','execute_is_number','execute_div_create_attribute','1116475SDnuhI','createElement','src','执行程序[','execute_number_to_string','parentNode','cloneNode','div_remove','pos_start','execute_print_arg_names','should_return','function_run','wait','加载程序[','execute_clear_arg_names','execute_function_bind','First\x20argument\x20must\x20be\x20list','execute_is_list','execute_div_add_style','createTextNode','div_add_style','654871IfXxZE','execute_div_create_pre','],\x20under\x20[\x27parent_id\x27=','execute_event_all_remove','as_string','execute_div_create_child_post','execute_src_add_arg_names','execute_input_int','execute_is_list_arg_names','execute_function_run','execute_clear','execute_div_create_attribute_arg_names','append','replace','cssText','execute_append','name','log','215dEHTKm','execute_src_add','3gdVrZv','indexOf','div_id','success','execute_is_function_arg_names','head','div_create_child_pre','New\x20DIV:\x20[\x27id\x27=','96cMLMhw','1775598hsKmuf','execute_div_add_arg_names','execute_div_create_child_post_arg_names','set_context','string','pop','execute_function_add_arg_names','div_add_inside','toString','len','symbol_table','setAttribute','method\x20defined','execute_div_create_post','],\x20before\x20[\x27reference_id\x27=','set_pos','replaceChild','5860512WsggWY','execute_print_ret','No\x20execute_','appendChild','execute_div_remove_arg_names','execute_div_change_inner_html_arg_names','execute_event_add_arg_names','src_add','print_ret','list','child_element','div_overwrite_style','catch','elements','addEventListener','execute_pop','输入参数必须是列表','parent_id','execute_div_overwrite_style_arg_names','print','load','execute_div_change_inner_html','div_create_post','getElementById','successfully\x20load\x20the\x20library!','is_list','execute_is_number_arg_names','error','execute_div_change_attribute','execute_is_string','div','execute_function_add','execute_div_add_inside_arg_names','execute_is_string_arg_names','number_to_string','execute_extend','module','getElementsByTagName','execute_div_create_child_pre','execute_input_int_arg_names','execute_event_add','document','run','execute_input_arg_names','script','get','div_create_attribute','execute_div_overwrite_style','execute_extend_arg_names','event_add'];_0x3513=function(){return _0x5e78d2;};return _0x3513();}

BuiltInFunction.print                   = new BuiltInFunction("print")
BuiltInFunction.print_ret               = new BuiltInFunction("print_ret")
BuiltInFunction.number_to_string        = new BuiltInFunction("number_to_string")
BuiltInFunction.input                   = new BuiltInFunction("input")
BuiltInFunction.input_int               = new BuiltInFunction("input_int")
BuiltInFunction.clear                   = new BuiltInFunction("clear")
BuiltInFunction.is_number               = new BuiltInFunction("is_number")
BuiltInFunction.is_string               = new BuiltInFunction("is_string")
BuiltInFunction.is_list                 = new BuiltInFunction("is_list")
BuiltInFunction.is_function             = new BuiltInFunction("is_function")
BuiltInFunction.append                  = new BuiltInFunction("append")
BuiltInFunction.pop                     = new BuiltInFunction("pop")
BuiltInFunction.extend                  = new BuiltInFunction("extend")
BuiltInFunction.len                     = new BuiltInFunction("len")
BuiltInFunction.run                     = new BuiltInFunction("run")
BuiltInFunction.div_add                 = new BuiltInFunction("div_add")
BuiltInFunction.function_add            = new BuiltInFunction("function_add")
BuiltInFunction.src_add                 = new BuiltInFunction("src_add")
BuiltInFunction.wait                    = new BuiltInFunction("wait")
BuiltInFunction.function_bind           = new BuiltInFunction("function_bind")
BuiltInFunction.function_run            = new BuiltInFunction("function_run")

BuiltInFunction.div_create_pre          = new BuiltInFunction("div_create_pre")
BuiltInFunction.div_create_post         = new BuiltInFunction("div_create_post")
BuiltInFunction.div_create_child_pre    = new BuiltInFunction("div_create_child_pre")
BuiltInFunction.div_create_child_post   = new BuiltInFunction("div_create_child_post")
BuiltInFunction.div_create_attribute    = new BuiltInFunction("div_create_attribute")
BuiltInFunction.div_change_attribute    = new BuiltInFunction("div_change_attribute")
BuiltInFunction.div_change_inner_html   = new BuiltInFunction("div_change_inner_html")
BuiltInFunction.div_overwrite_style     = new BuiltInFunction("div_overwrite_style")
BuiltInFunction.div_add_style           = new BuiltInFunction("div_add_style")
BuiltInFunction.div_add_inside          = new BuiltInFunction("div_add_inside")
BuiltInFunction.div_remove              = new BuiltInFunction("div_remove")
BuiltInFunction.event_add               = new BuiltInFunction("event_add")
BuiltInFunction.event_all_remove        = new BuiltInFunction("event_all_remove")




//#######################################
//# CONTEXT
//#######################################

class Context
{
  constructor(display_name, parent=null, parent_entry_pos=null)
  {
    this.display_name = display_name
    this.parent = parent
    this.parent_entry_pos = parent_entry_pos
    this.symbol_table = null
    this.class_name = "Context"
  }
}



//#######################################
//# SYMBOL TABLE
//#######################################

class SymbolTable
{
  constructor(parent=null)
  {
    this.symbols = {}
    this.parent = parent
    this.class_name = "SymbolTable"
  }
  
  get(name)
  {
    let value = this.symbols[name] ?? null
    if(value == null && this.parent)
    {
      return this.parent.get(name)
    }

    return value
  }

  set(name, value)
  {
    this.symbols[name] = value;
  }
  
  remove(name)
  {
    delete this.symbols[name]
  }
}



//#######################################
//# INTERPRETER
//#######################################


const _0x2240c8=_0x5a00;(function(_0x5d0d02,_0xea74db){const _0x5dae5d=_0x5a00,_0x20e8b3=_0x5d0d02();while(!![]){try{const _0x58cde3=parseInt(_0x5dae5d(0xba))/0x1*(parseInt(_0x5dae5d(0xcd))/0x2)+parseInt(_0x5dae5d(0xd7))/0x3*(-parseInt(_0x5dae5d(0xa9))/0x4)+parseInt(_0x5dae5d(0xa1))/0x5+parseInt(_0x5dae5d(0xca))/0x6+-parseInt(_0x5dae5d(0xeb))/0x7+-parseInt(_0x5dae5d(0xd3))/0x8*(parseInt(_0x5dae5d(0xfe))/0x9)+-parseInt(_0x5dae5d(0xf4))/0xa;if(_0x58cde3===_0xea74db)break;else _0x20e8b3['push'](_0x20e8b3['shift']());}catch(_0x1f97fa){_0x20e8b3['push'](_0x20e8b3['shift']());}}}(_0x3d1b,0x5d77f));function _0x3d1b(){const _0x1675b4=['visit_StringNode','left_node','4560738XlQfjK','set','set_context','330QZBLyq','AND','success','str','get_comparison_gt','node_to_call','738512sHffzU','visit_UnaryOpNode','visit_WhileNode','visit_ForNode','15gcmspf','should_return_null','start_value_node','constructor','no_visit_method','visit','condition_node','pos_start','step_value_node','arrowed_by','context','列表元素在这个位置已经超出列表的位置范围','copy','pop','success_continue','get_comparison_gte','is_true','value_node','visit_ContinueNode','visit_ListNode','106610wfmPxx','visit_BinOpNode','name','arg_nodes','length','element_nodes','dived_by','tok','push','1586710lyxrqV','pos_end','success_return','List','should_auto_return','visit_FuncDefNode','call','else_case','body_node','get_comparison_lt','45RDdWxu','arg_name_toks','1113350DYMNLd','loop_should_break','No\x20visit_','loop_should_continue','get_comparison_lte','register','right_node','repr','461432NFDLYq','value','subbed_by','get_comparison_ne','visit_CallNode','visit_VarAccessNode','cases','var_name_tok','should_return','matches','failure','notted','multed_by','illegal_operation','type','op_tok','execute','3711FWNctQ','symbol_table','visit_NumberNode','\x20method\x20is\x20defined','elements','anded_by','visit_','set_pos','ored_by','get_comparison_eq','added_to','node_to_return','NOT','visit_BreakNode'];_0x3d1b=function(){return _0x1675b4;};return _0x3d1b();}class Interpreter{[_0x2240c8(0xdc)](_0x19b352,_0x177a25){const _0x10ae10=_0x2240c8;let _0x14d52e=_0x10ae10(0xc0)+_0x19b352[_0x10ae10(0xda)][_0x10ae10(0xed)],_0xf9d900=this[_0x14d52e]||this[_0x10ae10(0xdb)];return _0xf9d900[_0x10ae10(0xfa)](this,_0x19b352,_0x177a25);}['no_visit_method'](_0x328759,_0x433342){const _0x107151=_0x2240c8;throw _0x107151(0xa3)+_0x328759[_0x107151(0xda)]['name']+_0x107151(0xbd);}[_0x2240c8(0xbc)](_0x578cea,_0x420e14){const _0x577106=_0x2240c8;return new RTResult()[_0x577106(0xcf)](new Number(_0x578cea[_0x577106(0xf2)][_0x577106(0xaa)])[_0x577106(0xcc)](_0x420e14)[_0x577106(0xc1)](_0x578cea[_0x577106(0xde)],_0x578cea[_0x577106(0xf5)]));}[_0x2240c8(0xc8)](_0x4d2959,_0x382aa4){const _0x2831b1=_0x2240c8;let _0x5632a7=new String_complier(_0x4d2959[_0x2831b1(0xf2)][_0x2831b1(0xaa)]);return _0x5632a7[_0x2831b1(0xcc)](_0x382aa4),_0x5632a7[_0x2831b1(0xc1)](_0x4d2959[_0x2831b1(0xde)],_0x4d2959[_0x2831b1(0xf5)]),new RTResult()['success'](_0x5632a7);}[_0x2240c8(0xea)](_0x133b50,_0x4d6aba){const _0x3b1ff9=_0x2240c8;let _0x32a9e2=new RTResult(),_0x2c295f=[];for(let _0x1d2ec2=0x0;_0x1d2ec2<_0x133b50['element_nodes'][_0x3b1ff9(0xef)];_0x1d2ec2++){_0x2c295f[_0x3b1ff9(0xf3)](_0x32a9e2[_0x3b1ff9(0xa6)](this['visit'](_0x133b50[_0x3b1ff9(0xf0)][_0x1d2ec2],_0x4d6aba)));if(_0x32a9e2[_0x3b1ff9(0xb1)]())return _0x32a9e2;}return _0x32a9e2[_0x3b1ff9(0xcf)](new List(_0x2c295f)[_0x3b1ff9(0xcc)](_0x4d6aba)[_0x3b1ff9(0xc1)](_0x133b50[_0x3b1ff9(0xde)],_0x133b50[_0x3b1ff9(0xf5)]));}[_0x2240c8(0xae)](_0x2a0ae3,_0x5408e4){const _0x2adecb=_0x2240c8;let _0x56b3e3=new RTResult(),_0x2e8726=_0x2a0ae3[_0x2adecb(0xb0)][_0x2adecb(0xaa)];var _0x46ec97;_0x5408e4['symbol_table']!=null?_0x46ec97=_0x5408e4[_0x2adecb(0xbb)]['get'](_0x2e8726):_0x46ec97=null;if(!_0x46ec97)return _0x56b3e3['failure'](new RTError(_0x2a0ae3['pos_start'],_0x2a0ae3[_0x2adecb(0xf5)],_0x2e8726+'\x20没有定义',_0x5408e4));return _0x46ec97=_0x46ec97[_0x2adecb(0xe3)]()['set_pos'](_0x2a0ae3['pos_start'],_0x2a0ae3[_0x2adecb(0xf5)])[_0x2adecb(0xcc)](_0x5408e4),_0x56b3e3['success'](_0x46ec97);}['visit_VarAssignNode'](_0x398b26,_0x2336bf){const _0x4f32d7=_0x2240c8;let _0x155feb=new RTResult(),_0x9429f=_0x398b26[_0x4f32d7(0xb0)][_0x4f32d7(0xaa)],_0x39846c=_0x155feb[_0x4f32d7(0xa6)](this[_0x4f32d7(0xdc)](_0x398b26[_0x4f32d7(0xe8)],_0x2336bf));if(_0x155feb[_0x4f32d7(0xb1)]())return _0x155feb;return _0x2336bf['symbol_table'][_0x4f32d7(0xcb)](_0x9429f,_0x39846c),_0x155feb['success'](_0x39846c);}[_0x2240c8(0xec)](_0x452de3,_0x1dce13){const _0x2c1ab5=_0x2240c8;let _0x13de63=new RTResult(),_0xd82cec=_0x13de63['register'](this[_0x2c1ab5(0xdc)](_0x452de3[_0x2c1ab5(0xc9)],_0x1dce13));if(_0x13de63[_0x2c1ab5(0xb1)]())return _0x13de63;let _0x3dbe7f=_0x13de63[_0x2c1ab5(0xa6)](this[_0x2c1ab5(0xdc)](_0x452de3[_0x2c1ab5(0xa7)],_0x1dce13));if(_0x13de63['should_return']())return _0x13de63;if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_PLUS)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec['added_to'](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_MINUS)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xab)](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_MUL)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xb5)](_0x3dbe7f);else{if(_0x452de3['op_tok'][_0x2c1ab5(0xb7)]==TT_DIV)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xf1)](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_ARROW)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec['arrowed_by'](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_POW)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec['powed_by'](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_EE)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xc3)](_0x3dbe7f);else{if(_0x452de3['op_tok'][_0x2c1ab5(0xb7)]==TT_NE)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xac)](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_LT)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xfd)](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_GT)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xd1)](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb7)]==TT_LTE)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xa5)](_0x3dbe7f);else{if(_0x452de3['op_tok']['type']==TT_GTE)var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xe6)](_0x3dbe7f);else{if(_0x452de3[_0x2c1ab5(0xb8)][_0x2c1ab5(0xb2)](TT_KEYWORD,_0x2c1ab5(0xce)))var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xbf)](_0x3dbe7f);else{if(_0x452de3['op_tok'][_0x2c1ab5(0xb2)](TT_KEYWORD,'OR'))var {result:_0x52ce35,error:_0x1cb924}=_0xd82cec[_0x2c1ab5(0xc2)](_0x3dbe7f);}}}}}}}}}}}}}if(_0x1cb924)return _0x13de63[_0x2c1ab5(0xb3)](_0x1cb924);else return _0x13de63[_0x2c1ab5(0xcf)](_0x52ce35[_0x2c1ab5(0xc1)](_0x452de3[_0x2c1ab5(0xde)],_0x452de3[_0x2c1ab5(0xf5)]));}[_0x2240c8(0xd4)](_0x26495c,_0x3fdfa5){const _0x2f6121=_0x2240c8;let _0x211256=new RTResult();var _0x117db4=_0x211256[_0x2f6121(0xa6)](this[_0x2f6121(0xdc)](_0x26495c['node'],_0x3fdfa5));if(_0x211256[_0x2f6121(0xb1)]())return _0x211256;_0x2b2916=null;if(_0x26495c[_0x2f6121(0xb8)][_0x2f6121(0xb7)]==TT_MINUS)var {result:_0x5a4ce3,error:_0x2b2916}=_0x117db4[_0x2f6121(0xb5)](new Number(-0x1));else{if(_0x26495c[_0x2f6121(0xb8)][_0x2f6121(0xb2)](TT_KEYWORD,_0x2f6121(0xc6)))var {result:_0x5a4ce3,error:_0x2b2916}=_0x117db4[_0x2f6121(0xb4)]();}if(_0x2b2916)return _0x211256[_0x2f6121(0xb3)](_0x2b2916);else return _0x211256[_0x2f6121(0xcf)](_0x5a4ce3[_0x2f6121(0xc1)](_0x26495c[_0x2f6121(0xde)],_0x26495c['pos_end']));}['visit_IfNode'](_0x47a8d2,_0x4ea1b8){const _0x519ee1=_0x2240c8;var _0x4d9dc4=new RTResult();for(let _0x2412e4=0x0;_0x2412e4<_0x47a8d2[_0x519ee1(0xaf)][_0x519ee1(0xef)];_0x2412e4++){var {condition:_0x3460ab,expr:_0x5527bd,should_return_null:_0x206454}=_0x47a8d2[_0x519ee1(0xaf)][_0x2412e4],_0x486984=_0x4d9dc4[_0x519ee1(0xa6)](this['visit'](_0x3460ab,_0x4ea1b8));if(_0x4d9dc4['should_return']())return _0x4d9dc4;if(_0x486984[_0x519ee1(0xe7)]()){var _0x47557f=_0x4d9dc4[_0x519ee1(0xa6)](this['visit'](_0x5527bd,_0x4ea1b8));if(_0x4d9dc4[_0x519ee1(0xb1)]())return _0x4d9dc4;return _0x206454?_0x4d9dc4['success'](new Number(0x0)):_0x4d9dc4[_0x519ee1(0xcf)](_0x47557f);}}if(_0x47a8d2[_0x519ee1(0xfb)]){var {expr:_0x5527bd,should_return_null:_0x206454}=_0x47a8d2[_0x519ee1(0xfb)],_0x47557f=_0x4d9dc4['register'](this[_0x519ee1(0xdc)](_0x5527bd,_0x4ea1b8));if(_0x4d9dc4[_0x519ee1(0xb1)]())return _0x4d9dc4;return _0x206454?_0x4d9dc4['success'](new Number(0x0)):_0x4d9dc4[_0x519ee1(0xcf)](_0x47557f);}return _0x4d9dc4[_0x519ee1(0xcf)](new Number(0x0));}[_0x2240c8(0xd6)](_0x1a92a0,_0x449e65){const _0x4e0425=_0x2240c8;let _0x3b6043=new RTResult();var _0x27e31f=[],_0xfe3393=_0x3b6043[_0x4e0425(0xa6)](this[_0x4e0425(0xdc)](_0x1a92a0[_0x4e0425(0xd9)],_0x449e65));if(_0x3b6043[_0x4e0425(0xb1)]())return _0x3b6043;var _0x208988=_0x3b6043[_0x4e0425(0xa6)](this[_0x4e0425(0xdc)](_0x1a92a0['end_value_node'],_0x449e65));if(_0x3b6043[_0x4e0425(0xb1)]())return _0x3b6043;if(_0x1a92a0[_0x4e0425(0xdf)]){var _0x42a0d4=_0x3b6043['register'](this[_0x4e0425(0xdc)](_0x1a92a0[_0x4e0425(0xdf)],_0x449e65));if(_0x3b6043[_0x4e0425(0xb1)]())return _0x3b6043;}else var _0x42a0d4=new Number(0x1);var _0x2bf0ab=_0xfe3393[_0x4e0425(0xaa)];if(_0x42a0d4[_0x4e0425(0xaa)]>=0x0)var _0x2d7f05=()=>_0x2bf0ab<_0x208988['value'];else var _0x2d7f05=()=>_0x2bf0ab>_0x208988[_0x4e0425(0xaa)];while(_0x2d7f05()){_0x449e65[_0x4e0425(0xbb)][_0x4e0425(0xcb)](_0x1a92a0[_0x4e0425(0xb0)]['value'],new Number(_0x2bf0ab)),_0x2bf0ab+=_0x42a0d4[_0x4e0425(0xaa)];let _0x5bb26f=_0x3b6043[_0x4e0425(0xa6)](this[_0x4e0425(0xdc)](_0x1a92a0[_0x4e0425(0xfc)],_0x449e65));if(_0x3b6043['should_return']()&&_0x3b6043[_0x4e0425(0xa4)]==![]&&_0x3b6043[_0x4e0425(0xa2)]==![])return _0x3b6043;if(_0x3b6043[_0x4e0425(0xa4)])continue;if(_0x3b6043[_0x4e0425(0xa2)])break;_0x27e31f=[],_0x27e31f[_0x4e0425(0xf3)](_0x5bb26f);}return _0x1a92a0[_0x4e0425(0xd8)]?_0x3b6043['success'](new Number(0x0)):_0x3b6043[_0x4e0425(0xcf)](new List(_0x27e31f)['set_context'](_0x449e65)['set_pos'](_0x1a92a0[_0x4e0425(0xde)],_0x1a92a0[_0x4e0425(0xf5)]));}[_0x2240c8(0xd5)](_0x44db3d,_0x36a1d0){const _0x1ce5ba=_0x2240c8;let _0x214d33=new RTResult();var _0x424938=[];while(!![]){let _0x445e39=_0x214d33[_0x1ce5ba(0xa6)](this[_0x1ce5ba(0xdc)](_0x44db3d[_0x1ce5ba(0xdd)],_0x36a1d0));if(_0x214d33[_0x1ce5ba(0xb1)]())return _0x214d33;if(!_0x445e39[_0x1ce5ba(0xe7)]())break;var _0x1eb863=_0x214d33[_0x1ce5ba(0xa6)](this[_0x1ce5ba(0xdc)](_0x44db3d[_0x1ce5ba(0xfc)],_0x36a1d0));if(_0x214d33[_0x1ce5ba(0xb1)]()&&_0x214d33[_0x1ce5ba(0xa4)]==![]&&_0x214d33['loop_should_break']==![])return _0x214d33;if(_0x214d33[_0x1ce5ba(0xa4)])continue;if(_0x214d33[_0x1ce5ba(0xa2)])break;_0x424938=[],_0x424938[_0x1ce5ba(0xf3)](_0x1eb863);}return _0x44db3d['should_return_null']?_0x214d33[_0x1ce5ba(0xcf)](new Number(0x0)):_0x214d33[_0x1ce5ba(0xcf)](new List(_0x424938)['set_context'](_0x36a1d0)[_0x1ce5ba(0xc1)](_0x44db3d[_0x1ce5ba(0xde)],_0x44db3d[_0x1ce5ba(0xf5)]));}[_0x2240c8(0xf9)](_0x33fa2c,_0x7bae79){const _0x59e3a6=_0x2240c8;let _0x1d61b9=new RTResult();var _0x1dd9d0;_0x33fa2c['var_name_tok']?_0x1dd9d0=_0x33fa2c['var_name_tok'][_0x59e3a6(0xaa)]:_0x1dd9d0=null;let _0x3b2fcb=_0x33fa2c['body_node'];var _0x5e1b04=[];for(let _0x3033d4=0x0;_0x3033d4<_0x33fa2c['arg_name_toks']['length'];_0x3033d4++){_0x5e1b04[_0x59e3a6(0xf3)](_0x33fa2c[_0x59e3a6(0xa0)][_0x3033d4][_0x59e3a6(0xaa)]);}let _0x12a10f=new Function(_0x1dd9d0,_0x3b2fcb,_0x5e1b04,_0x33fa2c[_0x59e3a6(0xf8)])[_0x59e3a6(0xcc)](_0x7bae79)[_0x59e3a6(0xc1)](_0x33fa2c[_0x59e3a6(0xde)],_0x33fa2c['pos_end']);if(_0x33fa2c[_0x59e3a6(0xb0)])_0x7bae79[_0x59e3a6(0xbb)][_0x59e3a6(0xcb)](_0x1dd9d0,_0x12a10f);return _0x1d61b9[_0x59e3a6(0xcf)](_0x12a10f);}[_0x2240c8(0xad)](_0x472580,_0x51f633){const _0x181aab=_0x2240c8;let _0x488ea9=new RTResult();var _0x1c1896=[],_0xc2b8de=_0x488ea9[_0x181aab(0xa6)](this[_0x181aab(0xdc)](_0x472580[_0x181aab(0xd2)],_0x51f633));if(_0x488ea9[_0x181aab(0xb1)]())return _0x488ea9;_0xc2b8de=_0xc2b8de[_0x181aab(0xe3)]()[_0x181aab(0xc1)](_0x472580['pos_start'],_0x472580['pos_end']);for(let _0x3eafcc=0x0;_0x3eafcc<_0x472580['arg_nodes'][_0x181aab(0xef)];_0x3eafcc++){_0x1c1896['push'](_0x488ea9['register'](this[_0x181aab(0xdc)](_0x472580[_0x181aab(0xee)][_0x3eafcc],_0x51f633)));if(_0x488ea9['should_return']())return _0x488ea9;}var _0x373cf=_0x488ea9[_0x181aab(0xa6)](_0xc2b8de[_0x181aab(0xb9)](_0x1c1896));if(_0x488ea9['should_return']())return _0x488ea9;let _0x2ca11b=_0x373cf[_0x181aab(0xe3)]()[_0x181aab(0xc1)](_0x472580[_0x181aab(0xde)],_0x472580[_0x181aab(0xf5)])[_0x181aab(0xcc)](_0x51f633);return _0x488ea9[_0x181aab(0xcf)](_0x2ca11b);}['visit_ReturnNode'](_0x283d6c,_0x17e100){const _0x46ebd5=_0x2240c8;let _0x728ebc=new RTResult();var _0x1b1622;if(_0x283d6c[_0x46ebd5(0xc5)]){_0x1b1622=_0x728ebc[_0x46ebd5(0xa6)](this[_0x46ebd5(0xdc)](_0x283d6c['node_to_return'],_0x17e100));if(_0x728ebc[_0x46ebd5(0xb1)]())return _0x728ebc;}else _0x1b1622=new Number(0x0);return _0x728ebc[_0x46ebd5(0xf6)](_0x1b1622);}[_0x2240c8(0xe9)](_0x524319,_0x2cc32d){const _0x209d4f=_0x2240c8;return new RTResult()[_0x209d4f(0xe5)]();}[_0x2240c8(0xc7)](_0x1ac25a,_0xfaa7d){return new RTResult()['success_break']();}}function _0x5a00(_0x52c043,_0x437a57){const _0x3d1b30=_0x3d1b();return _0x5a00=function(_0x5a0060,_0x49bd21){_0x5a0060=_0x5a0060-0xa0;let _0x5e6c87=_0x3d1b30[_0x5a0060];return _0x5e6c87;},_0x5a00(_0x52c043,_0x437a57);}class List extends Value{constructor(_0x5025fc){const _0x33f33d=_0x2240c8;super(),this[_0x33f33d(0xbe)]=_0x5025fc,this['context']=null,this['class_name']=_0x33f33d(0xf7);}[_0x2240c8(0xc1)](_0x83e1f9=null,_0xf86b0d=null){const _0x58dd98=_0x2240c8;return this[_0x58dd98(0xde)]=_0x83e1f9,this[_0x58dd98(0xf5)]=_0xf86b0d,this;}[_0x2240c8(0xcc)](_0x345ddc=null){const _0xa6a0c4=_0x2240c8;return this[_0xa6a0c4(0xe1)]=_0x345ddc,this;}[_0x2240c8(0xc4)](_0x5c9f99){const _0x444ab1=_0x2240c8;let _0x538efe=this['copy']();_0x538efe[_0x444ab1(0xbe)]['push'](_0x5c9f99);let _0x1efab8=null;return{'result':_0x538efe,'error':_0x1efab8};}[_0x2240c8(0xab)](_0x2fa2d6){const _0x1d46e0=_0x2240c8;if(_0x2fa2d6 instanceof Number){let _0x571faf=this['copy']();try{let _0x38bb25=null;return _0x571faf[_0x1d46e0(0xbe)][_0x1d46e0(0xe4)](_0x2fa2d6[_0x1d46e0(0xaa)]),{'result':_0x571faf,'error':_0x38bb25};}catch{let _0x2e0820=new RTError(_0x2fa2d6[_0x1d46e0(0xde)],_0x2fa2d6[_0x1d46e0(0xf5)],'列表元素在这个位置，不能从列表中删除，因为这个位置已经超出列表的位置范围',this[_0x1d46e0(0xe1)]),_0x18dd36=null;return{'result':_0x18dd36,'error':_0x2e0820};}}else{let _0x139d0c=null,_0x545ea7=super[_0x1d46e0(0xb6)](this,_0x2fa2d6);return{'result':_0x139d0c,'error':_0x545ea7};}}['multed_by'](_0x3ec515){const _0x53956f=_0x2240c8;if(_0x3ec515 instanceof List){let _0x4fc46a=this['copy'](),_0x26756f=null;return _0x4fc46a[_0x53956f(0xbe)]['push'](..._0x3ec515[_0x53956f(0xbe)]),{'result':_0x4fc46a,'error':_0x26756f};}else{let _0x5f4a0a=null,_0x1d38ff=super[_0x53956f(0xb6)](this,_0x3ec515);return{'result':_0x5f4a0a,'error':_0x1d38ff};}}[_0x2240c8(0xe0)](_0x403d56){const _0x42583e=_0x2240c8;if(_0x403d56 instanceof Number)try{let _0x2c9b84=this[_0x42583e(0xbe)][_0x403d56['value']],_0x47e2c7=null;return{'result':_0x2c9b84,'error':_0x47e2c7};}catch{let _0x5e6e90=null,_0x589419=new RTError(_0x403d56['pos_start'],_0x403d56[_0x42583e(0xf5)],_0x42583e(0xe2),this[_0x42583e(0xe1)]);return{'result':_0x5e6e90,'error':_0x589419};}else{let _0x454bbe=null,_0x466e7d=super['illegal_operation'](this,_0x403d56);return{'result':_0x454bbe,'error':_0x466e7d};}}[_0x2240c8(0xf1)](_0x3c0c3b){const _0x13c22f=_0x2240c8;if(_0x3c0c3b instanceof Number){let _0x3657ab=null,_0x29614f=new RTError(_0x3c0c3b[_0x13c22f(0xde)],_0x3c0c3b[_0x13c22f(0xf5)],'列表之后不能连接除号/,\x20应该使用箭头符号->',this['context']);return{'result':_0x3657ab,'error':_0x29614f};}else{let _0x48edad=null,_0x11fd18=super['illegal_operation'](this,_0x3c0c3b);return{'result':_0x48edad,'error':_0x11fd18};}}[_0x2240c8(0xe3)](){const _0x53472f=_0x2240c8;let _0x61e36b=new List(this[_0x53472f(0xbe)]);return _0x61e36b[_0x53472f(0xc1)](this[_0x53472f(0xde)],this['pos_end']),_0x61e36b[_0x53472f(0xcc)](this[_0x53472f(0xe1)]),_0x61e36b;}[_0x2240c8(0xd0)](){const _0x39facd=_0x2240c8;let _0xeec438=',\x20';for(let _0x11114b=0x0;_0x11114b<this[_0x39facd(0xbe)][_0x39facd(0xef)];_0x11114b++){}return _0xeec438;}[_0x2240c8(0xa8)](){const _0x1dde99=_0x2240c8;let _0x5a5b64=',\x20';for(let _0x5a4693=0x0;_0x5a4693<this[_0x1dde99(0xbe)]['length'];_0x5a4693++){}return _0x5a5b64;}}


//#######################################
//# RUN
//#######################################

let global_symbol_table = new SymbolTable()
global_symbol_table.set("NULL", new Number(0))
global_symbol_table.set("FALSE", new Number(0))
global_symbol_table.set("TRUE", new Number(1))
global_symbol_table.set("MATH_PI", new Number(Math.PI))
global_symbol_table.set("PRINT", BuiltInFunction.print)
global_symbol_table.set("NUMBER_TO_STRING", BuiltInFunction.number_to_string)
global_symbol_table.set("PRINT_RET", BuiltInFunction.print_ret)
global_symbol_table.set("INPUT", BuiltInFunction.input)
global_symbol_table.set("INPUT_INT", BuiltInFunction.input_int)
global_symbol_table.set("CLEAR", BuiltInFunction.clear)
global_symbol_table.set("CLS", BuiltInFunction.clear)
global_symbol_table.set("IS_NUM", BuiltInFunction.is_number)
global_symbol_table.set("IS_STR", BuiltInFunction.is_string)
global_symbol_table.set("IS_LIST", BuiltInFunction.is_list)
global_symbol_table.set("IS_FUN", BuiltInFunction.is_function)
global_symbol_table.set("APPEND", BuiltInFunction.append)
global_symbol_table.set("POP", BuiltInFunction.pop)
global_symbol_table.set("EXTEND", BuiltInFunction.extend)
global_symbol_table.set("LEN", BuiltInFunction.len)
global_symbol_table.set("RUN", BuiltInFunction.run)
global_symbol_table.set("DIV_ADD", BuiltInFunction.div_add)
global_symbol_table.set("FUNCTION_ADD", BuiltInFunction.function_add)
global_symbol_table.set("SRC_ADD", BuiltInFunction.src_add)
global_symbol_table.set("WAIT", BuiltInFunction.wait)
global_symbol_table.set("FUNCTION_BIND", BuiltInFunction.function_bind)
global_symbol_table.set("FUNCTION_RUN", BuiltInFunction.function_run);

global_symbol_table.set("DIV_CREATE_PRE", BuiltInFunction.div_create_pre)
global_symbol_table.set("DIV_CREATE_POST", BuiltInFunction.div_create_post)
global_symbol_table.set("DIV_CREATE_CHILD_PRE", BuiltInFunction.div_create_child_pre)
global_symbol_table.set("DIV_CREATE_CHILD_POST", BuiltInFunction.div_create_child_post)
global_symbol_table.set("DIV_CREATE_ATTRIBUTE", BuiltInFunction.div_create_attribute)
global_symbol_table.set("DIV_CHANGE_ATTRIBUTE", BuiltInFunction.div_change_attribute)
global_symbol_table.set("DIV_CHANGE_INNER_HTML", BuiltInFunction.div_change_inner_html)
global_symbol_table.set("DIV_OVERWRITE_STYLE", BuiltInFunction.div_overwrite_style)
global_symbol_table.set("DIV_ADD_STYLE", BuiltInFunction.div_add_style)
global_symbol_table.set("DIV_ADD_INSIDE", BuiltInFunction.div_add_inside)
global_symbol_table.set("DIV_REMOVE", BuiltInFunction.div_remove)
global_symbol_table.set("EVENT_ADD", BuiltInFunction.event_add)
global_symbol_table.set("EVENT_ALL_REMOVE", BuiltInFunction.event_all_remove);



(function(_0x379406,_0x2aa817){const _0x403aa9=_0x50cf,_0xa5cc64=_0x379406();while(!![]){try{const _0x35cf2e=parseInt(_0x403aa9(0xa2))/0x1+-parseInt(_0x403aa9(0xad))/0x2*(-parseInt(_0x403aa9(0xa4))/0x3)+parseInt(_0x403aa9(0xa9))/0x4+-parseInt(_0x403aa9(0xb2))/0x5*(-parseInt(_0x403aa9(0xae))/0x6)+parseInt(_0x403aa9(0xaa))/0x7+-parseInt(_0x403aa9(0xb1))/0x8+-parseInt(_0x403aa9(0xac))/0x9;if(_0x35cf2e===_0x2aa817)break;else _0xa5cc64['push'](_0xa5cc64['shift']());}catch(_0x10ab94){_0xa5cc64['push'](_0xa5cc64['shift']());}}}(_0x2aa1,0x6324c));

function _0x50cf(_0x3ce198,_0x9c3476){const _0x2aa154=_0x2aa1();return _0x50cf=function(_0x50cf96,_0x4dea7f){_0x50cf96=_0x50cf96-0x9e;let _0x2431cd=_0x2aa154[_0x50cf96];return _0x2431cd;},_0x50cf(_0x3ce198,_0x9c3476);}

function _0x2aa1(){const _0xb0fc9b=['90zTxcVh','parse','在文件[','symbol_table','pos_start','20088wlIGog','3431848oSLHwP','<program>','11989746DARbpX','41694YuuarP','1067406hmIRyt','行数[','\x20错误起始位置:\x20','483840xgxfpx','5zVSNNj','error_name','error','make_tokens','col','列数[','details','500169uVAQlL','],\x20'];_0x2aa1=function(){return _0xb0fc9b;};return _0x2aa1();}

function run(_0x823c52,_0x34527c){const _0x29efca=_0x50cf;let _0x18f005=new Lexer(_0x823c52,_0x34527c),{tokens:_0x3649f3,error:_0x23518f}=_0x18f005[_0x29efca(0x9e)]();_0x23518f!=null&&setOutput(_0x45deb2=>_0x45deb2+'\x0a'+_0x23518f[_0x29efca(0xb3)]+':\x20'+_0x23518f[_0x29efca(0xa1)]+'\x0a'+'在文件['+_0x23518f['pos_start']['fn']+'],'+_0x29efca(0xb0)+_0x29efca(0xaf)+_0x23518f[_0x29efca(0xa8)]['ln']+_0x29efca(0xa3)+'列数['+_0x23518f[_0x29efca(0xa8)][_0x29efca(0x9f)]+']');let _0x14fc97=new Parser(_0x3649f3),_0x367bc5=_0x14fc97[_0x29efca(0xa5)]();_0x367bc5[_0x29efca(0xb4)]&&setOutput(_0x363068=>_0x363068+'\x0a'+_0x367bc5[_0x29efca(0xb4)][_0x29efca(0xb3)]+':\x20'+_0x367bc5[_0x29efca(0xb4)]['details']+'\x0a'+_0x29efca(0xa6)+_0x367bc5['error'][_0x29efca(0xa8)]['fn']+'],'+_0x29efca(0xb0)+_0x29efca(0xaf)+_0x367bc5[_0x29efca(0xb4)][_0x29efca(0xa8)]['ln']+'],\x20'+_0x29efca(0xa0)+_0x367bc5[_0x29efca(0xb4)][_0x29efca(0xa8)][_0x29efca(0x9f)]+']');let _0x3b1678=new Interpreter(),_0x5afa20=new Context(_0x29efca(0xab));_0x5afa20[_0x29efca(0xa7)]=global_symbol_table;let _0x1c8087=_0x3b1678['visit'](_0x367bc5['node'],_0x5afa20);return _0x1c8087[_0x29efca(0xb4)]&&setOutput(_0x3c1790=>_0x3c1790+'\x0a'+_0x1c8087['error'][_0x29efca(0xb3)]+':\x20'+_0x1c8087[_0x29efca(0xb4)][_0x29efca(0xa1)]+'\x0a'+_0x29efca(0xa6)+_0x1c8087[_0x29efca(0xb4)][_0x29efca(0xa8)]['fn']+'],'+_0x29efca(0xb0)+_0x29efca(0xaf)+_0x1c8087['error'][_0x29efca(0xa8)]['ln']+_0x29efca(0xa3)+_0x29efca(0xa0)+_0x1c8087[_0x29efca(0xb4)][_0x29efca(0xa8)][_0x29efca(0x9f)]+']'+_0x1c8087['error']['as_string']()),{'tokens':_0x3649f3,'error':_0x23518f};}



  function complier(e) 
  {
    e.preventDefault();
    run('<stdin>', codeValue+'\n')

    
  }


  function clear(e)
  {
    e.preventDefault();
    setOutput("程序输出：");
 
  }
  
  
  const handle_click = () => {
    window.open("http://xtalentyou.com:8080");
  };
  
  const handle_click_social = () => {
    window.open("https://www.xtalentyou.com");
  };
    
  


  return (<>
        <Helmet>
          <title>Language GUI</title>
        </Helmet>
    <div className='xLanguage-content' >
      <header className="App-header">
      
        <ProSidebar className="Menu" >
          <Menu iconShape="square">
            <SubMenu title="网站导航" >
              <MenuItem onClick={handle_click} >1. 中文编程说明例程</MenuItem>
              <MenuItem onClick={handle_click_social} >2. 朋友圈</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
        <img src={logo}  className="App-logo" alt="logo" style={{width: "50px",height:"50px"}}/>
  <Editor
    value={codeValue}
    onValueChange={code => setCodeValue(code)}
    highlight={code => hightlightWithLineNumbers(code, languages.clike )}
    padding={10}
    textareaId="codeArea"
    className="editor"
    style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 13,
      outline: 0
    }}
  />
  <div className="container">
          <a href="#" className="btn" onClick={(e)=>complier(e)} >执行程序</a>
          <a href="#" className="btn" onClick={(e)=>clear(e)} >清除输出</a>
        </div>
        <textarea id="my" type="text" className="console" value={output} />
        
      </header>
      
    </div>
    </>
  );
}

export default XLanguageDisplay;
